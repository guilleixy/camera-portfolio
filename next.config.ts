import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import nextra from "nextra";

const withNextra = nextra({});

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file":
        "./src/app/[locale]/[blog]/mdx-components.tsx",
    },
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextra(withNextIntl(nextConfig));
