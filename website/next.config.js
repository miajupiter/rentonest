// const {mdxmermaid } =require('mdx-mermaid')
// require('dotenv').config()

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    reactStrictMode: true,
    defaultShowCopyCode: true,
    codeHighlight: true,
    staticImage: false,
    readingTime: true,
    experimental: {
      serverComponentsExternalPackages: ['shiki', 'vscode-oniguruma']
    },
    // remarkPlugins: [
    //   [
    //     mdxmermaid, {
    //       theme: { light: 'neutral', dark: 'forest' }
    //     }
    //   ],
    // ],
    webpack: (config, { isServer }) => {
      if (!isServer) config.node = { fs: 'empty' }
      return config
    }
  })

module.exports = withNextra()

