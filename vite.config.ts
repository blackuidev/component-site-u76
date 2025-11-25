import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { checker } from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { codeSurfer } from 'code-surfer'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import { splitVendorChunks } from 'vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import * as child from 'child_process'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig as defineVitestConfig } from 'vitest/config'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { whyframe } from '@whyframe/vite'
import { whyframeVue } from '@whyframe/vue'
import { whyframeReact } from '@whyframe/react'
import { whyframeSvelte } from '@whyframe/svelte'
import { whyframeSolid } from '@whyframe/solid'

import { default as rehypeShiki } from '@rekyc/rehype-shiki'
import { default as remarkGfm } from 'remark-gfm'
import { default as remarkMath } from 'remark-math'
import { default as rehypeKatex } from 'rehype-katex'
import { default as remarkDirective } from 'remark-directive'
import { default as remarkDirectiveRehype } from 'remark-directive-rehype'
import { default as remarkEmbed } from 'remark-embed'
import { default as remarkRehype } from 'remark-rehype'
import { default as remarkParse } from 'remark-parse'
import { default as rehypeStringify } from 'rehype-stringify'
import { default as rehypeDocument } from 'rehype-document'
import { default as rehypeFormat } from 'rehype-format'
import { default as rehypeWrapAll } from 'rehype-wrap-all'
import { default as rehypeMinifyWhitespace } from 'rehype-minify-whitespace'
import { default as rehypePresetMinify } from 'rehype-preset-minify'
import { default as rehypeAutolinkHeadings } from 'rehype-autolink-headings'
import { default as rehypeSlug } from 'rehype-slug'
import { default as remarkToc } from 'remark-toc'
import { default as rehypePrismPlus } from 'rehype-prism-plus'
import { default as rehypeExternalLinks } from 'rehype-external-links'
import { default as rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import { default as rehypeInferReadingTimeMeta } from 'rehype-infer-reading-time-meta'

import inspect from 'vite-plugin-inspect'
import reactMarkdown from 'vite-plugin-react-markdown'
import rehypeReact from 'rehype-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { readFileSync } from 'fs'
import matter from 'gray-matter'

// import reactSwc from '@vitejs/plugin-react-swc'
import reactSwc from '@vitejs/plugin-react-swc'

const commitHash = child
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim()

const getPackageJson = () => {
  const jsonFile = readFileSync(resolve(__dirname, './package.json'), 'utf-8')
  return JSON.parse(jsonFile)
}

const packageJson = getPackageJson()

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  // optimizeDeps: {
  //   esbuildOptions: {
  //     // Node.js global to browser globalThis
  //     define: {
  //       global: 'globalThis',
  //     },
  //     plugins: [
  //       NodeGlobalsPolyfillPlugin({
  //         process: true,
  //         buffer: true,
  //       }),
  //       NodeModulesPolyfillPlugin(),
  //     ],
  //   },
  // },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
  server: {
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [
sentryVitePlugin({
          org: "blackui",
          project: "component-site-u76",

          // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
          // and needs the `org:read` and `project:releases` scopes
          authToken: process.env.SENTRY_AUTH_TOKEN,

          // Optionally uncomment the line below to override automatic release name detection
          release: packageJson.version + "@" + commitHash,
        }),
      ],
      output: {
        manualChunks: {
          '@codemirror': ['@codemirror/state', '@codemirror/view', '@codemirror/commands', '@codemirror/language', '@codemirror/lint', '@codemirror/autocomplete', '@codemirror/search', '@codemirror/closebrackets', '@codemirror/comment', '@codemirror/fold', '@codemirror/gutter', '@codemirror/highlight', '@codemirror/history', '@codemirror/indentation', '@codemirror/matchbrackets', '@codemirror/rectangular-selection', '@codemirror/rust', '@codemirror/selection', '@codemirror/text', '@codemirror/tooltip', '@codemirror/trailing-cursor', '@codemirror/rangeset', '@codemirror/panel', '@codemirror/basic-setup', '@codemirror/theme-one-dark'],
          'react-router-dom': ['react-router-dom'],
          'react-router': ['react-router'],
          '@remix-run/router': ['@remix-run/router'],
          '@tanstack/router': ['@tanstack/router'],
        },
      },
    },
  },
  plugins: [
    reactSwc(),
    TanStackRouterVite(),
    tsconfigPaths(),
    svgr({
      include: '**/*.svg?react',
    }),
    visualizer({
      filename: 'stats.html',
    }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
    reactMarkdown({
      remarkPlugins: [
        remarkParse,
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkBreaks,
        remarkGfm,
        remarkMath,
        remarkDirective,
        remarkDirectiveRehype,
        remarkEmbed,
        [remarkToc, { heading: 'Table of Contents', tight: true }],
      ],
      rehypePlugins: [
        rehypeKatex,
        rehypeRaw,
        rehypeStringify,
        rehypeDocument,
        rehypeFormat,
        rehypeWrapAll,
        rehypeMinifyWhitespace,
        rehypePresetMinify,
        rehypeAutolinkHeadings,
        rehypeSlug,
        [rehypePrismPlus, { showLineNumbers: true }],
        [rehypeExternalLinks, { rel: ['nofollow', 'noopener', 'noreferrer'] }],
        rehypeAccessibleEmojis,
        rehypeInferReadingTimeMeta,
      ],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Lightswind UI',
        short_name: 'Lightswind UI',
        description: 'An opinionated collection of components for your next React project.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
