import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // experimental typescript "statically typed links"
    // https://nextjs.org/docs/app/api-reference/next-config-js/typedRoutes
    // currently false in prod until Issue #62335 is fixed
    // https://github.com/vercel/next.js/issues/62335
    typedRoutes: true,    
  },
};

export default nextConfig;
