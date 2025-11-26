# imprun.dev Landing Page

imprun.dev의 메인 랜딩 페이지입니다. Vite + React로 구축된 정적 사이트입니다.

## 기술 스택

- **Vite 5** - 빠른 빌드 및 개발 서버
- **React 19** - UI 라이브러리
- **TypeScript 5** - 타입 안전성
- **Tailwind CSS v4** - 유틸리티 CSS 프레임워크
- **Framer Motion** - 애니메이션
- **Lucide React** - 아이콘

## 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 시작 (http://localhost:3002)
pnpm dev

# 타입 체크
pnpm typecheck

# 프로덕션 빌드
pnpm build

# 빌드 결과 미리보기
pnpm preview
```

## 배포

### Kubernetes 배포

```bash
# 빌드
pnpm build

# Kubernetes에 배포 (Helm chart 사용)
# k8s/imprun/charts/landing/ 에 Helm chart 정의
helm upgrade imprun-landing ./k8s/imprun/charts/landing \
  --namespace imprun-system \
  --install
```

### 도메인 구조

- **https://imprun.dev** - 메인 랜딩 페이지 (이 프로젝트)
- **https://portal.imprun.dev** - 웹 콘솔 (frontend/)
- **https://docs.imprun.dev** - 문서
- **https://blog.imprun.dev** - 블로그

## 프로젝트 구조

```
services/landing/
├── src/
│   ├── sections/         # 페이지 섹션 컴포넌트
│   │   ├── HeroSection.tsx
│   │   └── FeaturesSection.tsx
│   ├── components/       # 재사용 가능한 컴포넌트
│   ├── assets/           # 이미지, 폰트 등
│   ├── App.tsx           # 메인 앱 컴포넌트
│   ├── main.tsx          # 진입점
│   └── index.css         # 글로벌 스타일
├── index.html            # HTML 템플릿
├── vite.config.ts        # Vite 설정
├── tsconfig.json         # TypeScript 설정
└── package.json
```

## 성능 최적화

- **코드 스플리팅**: Vite 자동 청크 분할
  - `react-vendor`: React, ReactDOM
  - `motion`: Framer Motion
- **빌드 크기**: ~192KB (gzip: ~61KB)
- **Static Site**: CDN 배포 최적화

## SEO

- 메타 태그 최적화 (description, keywords)
- Semantic HTML
- Open Graph 지원 (추가 예정)

## 추가 예정

- [ ] Footer 섹션
- [ ] Use Cases 섹션
- [ ] Testimonials 섹션
- [ ] Pricing 섹션 (오픈소스이므로 선택적)
- [ ] Blog 최신 글 섹션
- [ ] Open Graph 이미지
