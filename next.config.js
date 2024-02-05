/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    domains: ["localhost"], // 画像を読み込むホスト名を追加
  },
  // reactStrictMode: false,
};

module.exports = nextConfig;
