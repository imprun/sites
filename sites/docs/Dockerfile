# ============================================
# Builder Stage: Next.js 빌드
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

# docs의 package.json 복사
COPY sites/docs/package.json ./sites/docs/

# 의존성 설치
RUN pnpm install --filter @imprun/docs

# 소스 코드 복사
COPY sites/docs ./sites/docs

# Next.js 빌드
WORKDIR /app/sites/docs

ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

# ============================================
# Runtime Stage: Next.js standalone 서버
# ============================================
FROM node:24-bookworm-slim AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# 빌드 결과물 복사
COPY --from=builder /app/sites/docs/.next/standalone ./
COPY --from=builder /app/sites/docs/.next/static ./sites/docs/.next/static
COPY --from=builder /app/sites/docs/public ./sites/docs/public

EXPOSE 3000

# Next.js 서버 시작
CMD ["node", "sites/docs/server.js"]
