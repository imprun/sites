# Kubernetes Manifests for imprun.dev

## Prerequisites

- Kubernetes cluster with Envoy Gateway installed
- cert-manager with `letsencrypt-cloudflare` ClusterIssuer
- Docker images pushed to Docker Hub:
  - `junsik/imprun-landing:latest`
  - `junsik/imprun-docs:latest`

## Deployment Order

### 1. Create Namespace and ReferenceGrants

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/reference-grants.yaml
```

### 2. Create Certificates

```bash
kubectl apply -f k8s/certificates.yaml
```

인증서 발급 확인:
```bash
kubectl get certificate -n imprun-website
kubectl describe certificate imprun-dev-tls -n imprun-website
kubectl describe certificate docs-imprun-dev-tls -n imprun-website
```

### 3. Patch Gateway (Add new listeners)

```bash
kubectl patch gateway imprun-gateway -n envoy-gateway-system --type='json' -p='[
  {
    "op": "add",
    "path": "/spec/listeners/-",
    "value": {
      "allowedRoutes": {"namespaces": {"from": "All"}},
      "hostname": "imprun.dev",
      "name": "https-landing",
      "port": 443,
      "protocol": "HTTPS",
      "tls": {
        "certificateRefs": [{"group": "", "kind": "Secret", "name": "imprun-dev-tls", "namespace": "imprun-website"}],
        "mode": "Terminate"
      }
    }
  },
  {
    "op": "add",
    "path": "/spec/listeners/-",
    "value": {
      "allowedRoutes": {"namespaces": {"from": "All"}},
      "hostname": "docs.imprun.dev",
      "name": "https-docs",
      "port": 443,
      "protocol": "HTTPS",
      "tls": {
        "certificateRefs": [{"group": "", "kind": "Secret", "name": "docs-imprun-dev-tls", "namespace": "imprun-website"}],
        "mode": "Terminate"
      }
    }
  }
]'
```

### 4. Deploy Applications

```bash
kubectl apply -f k8s/landing.yaml
kubectl apply -f k8s/docs.yaml
```

### 5. Create HTTPRoutes

```bash
kubectl apply -f k8s/httproutes.yaml
```

## Apply All at Once

```bash
# Create namespace and grants
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/reference-grants.yaml

# Create certificates
kubectl apply -f k8s/certificates.yaml

# Wait for certificates to be ready
kubectl wait --for=condition=Ready certificate/imprun-dev-tls -n imprun-website --timeout=300s
kubectl wait --for=condition=Ready certificate/docs-imprun-dev-tls -n imprun-website --timeout=300s

# Patch gateway (run manually - see step 3 above)

# Deploy applications
kubectl apply -f k8s/landing.yaml
kubectl apply -f k8s/docs.yaml

# Create routes
kubectl apply -f k8s/httproutes.yaml
```

## Verify Deployment

```bash
# Check pods
kubectl get pods -n imprun-website

# Check services
kubectl get svc -n imprun-website

# Check HTTPRoutes
kubectl get httproute -n imprun-website

# Check Gateway listeners
kubectl get gateway imprun-gateway -n envoy-gateway-system -o jsonpath='{.status.listeners[*].name}'
```

## Update Images

```bash
# Landing
kubectl set image deployment/landing landing=junsik/imprun-landing:<tag> -n imprun-website

# Docs
kubectl set image deployment/docs docs=junsik/imprun-docs:<tag> -n imprun-website
```

## Rollback

```bash
kubectl rollout undo deployment/landing -n imprun-website
kubectl rollout undo deployment/docs -n imprun-website
```

## Delete All

```bash
kubectl delete -f k8s/httproutes.yaml
kubectl delete -f k8s/docs.yaml
kubectl delete -f k8s/landing.yaml
kubectl delete -f k8s/certificates.yaml
kubectl delete -f k8s/reference-grants.yaml
kubectl delete -f k8s/namespace.yaml
```

## DNS Configuration

Ensure DNS records point to the Envoy Gateway load balancer IP:

```
imprun.dev       -> <Gateway IP>
docs.imprun.dev  -> <Gateway IP>
```

Current Gateway IPs:
```bash
kubectl get gateway imprun-gateway -n envoy-gateway-system -o jsonpath='{.status.addresses[*].value}'
```
