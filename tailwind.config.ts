import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
// import plugin from 'tailwindcss/plugin'
// import postcss from 'postcss'

export default {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'app-blue-1': '#1565C0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // plugin(function ({ addVariant, e }) {
    //   addVariant('firefox', ({ container, separator }) => {
    //     const isFirefoxRule = postcss.atRule({
    //       name: '-moz-document',
    //       params: 'url-prefix()',
    //     })
    //     isFirefoxRule.append(container.nodes)
    //     container.append(isFirefoxRule)
    //     isFirefoxRule.walkRules((rule) => {
    //       rule.selector = `.${e(
    //         `firefox${separator}${rule.selector.slice(1)}`
    //       )}`
    //     })
    //   })
    // }),
  ],
} as Config
