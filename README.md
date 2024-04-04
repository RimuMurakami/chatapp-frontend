# Chat App (Frontend)

Laravel と Nextjs の技術習得のため、チャットアプリを個人開発しています。

<img width="1279" alt="chat-app-img" src="https://github.com/RimuMurakami/chatapp-frontend/assets/118171336/d371f38d-b85c-4053-86e0-48979c1787ea">

<br><br>

![chatapp](https://github.com/RimuMurakami/chatapp-frontend/assets/118171336/e796e909-e3df-464e-964c-fa5097554128)

<br><br>

### アプリのデモ動画 URL(ファイル容量大のため、ローカルにて再生可能)

https://github.com/RimuMurakami/chatapp-frontend/blob/main/chatapp_demo.mp4

<br><br>
### Backend API Server の URL

https://github.com/RimuMurakami/chatapp-backend
<br><br>

- 今後の実装予定機能
  - <s>フロントエンドコードのTypescript対応 (refactoring-to-TypeScript ブランチにて実施中)</s> 2024/04/04 Auth以外に対応
  - 認可ロジック
  - リクエストのバリデーション
  - メールサーバー
  - エラーハンドリング等

## 動作確認に必要な外部 API 等

- GoogleAuth
- Pusher

## ER 図

![chat-app-ER](https://github.com/RimuMurakami/chatapp-frontend/assets/118171336/28887a64-9c9a-495f-8c76-b1f2a5726c3b)

<br><br><br><br><br><hr>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
