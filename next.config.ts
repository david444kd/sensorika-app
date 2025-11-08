import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/:locale/eat/:path*',
        destination: '/eat/:path*', 
      },
      {
        source: '/:locale/games/:path*',
        destination: '/games/:path*',
      },
      {
        source: '/:locale/actions/:path*',
        destination: '/actions/:path*',
      },
    ];
  },
};

export default withNextIntl(nextConfig);
