# ============================================
# Builder Stage: 빌드 전용 스테이지
# ============================================
FROM node:24-bookworm-slim AS builder

# 빌드에 필요한 패키지 설치
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    python3 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# pnpm 설치
RUN npm install -g pnpm

# pnpm workspace 설정 파일 복사
COPY package.json ./
COPY pnpm-workspace.yaml ./
COPY pnpm-lock.yaml ./

# landing의 package.json 복사
COPY sites/landing/package.json ./sites/landing/

# 의존성 설치 (BuildKit 캐시 마운트 활용)
# pnpm store를 Docker 캐시 레이어에 저장하여 재빌드 시 재사용
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --filter @imprun/landing

# 소스 코드 복사
COPY sites/landing ./sites/landing

# Vite 빌드
WORKDIR /app/sites/landing

RUN pnpm build

# ============================================
# Runtime Stage: nginx로 정적 파일 서빙
# ============================================
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

# 빌드 결과물 복사
COPY --from=builder /app/sites/landing/dist /usr/share/nginx/html

# nginx 설정 복사
COPY sites/landing/nginx.conf /etc/nginx/conf.d/default.conf

# 포트 노출 (nginx-unprivileged는 8080 사용)
EXPOSE 8080

# Health check (8080 포트)
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# nginx 시작
CMD ["nginx", "-g", "daemon off;"]
