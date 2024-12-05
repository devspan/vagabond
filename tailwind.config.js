module.exports = {
  content: [
    "./src/**/*.{vue,js,ts}",
    "./src/components/**/*.vue",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        green: "#41A07B",
        black: "#343A40",
        yellow: "#E4A542",
        orange: "#F48046",
        blue: {
          DEFAULT: "#2c81b0",
          700: "#1a6691"
        },
        lightblue: "#2399f1",
        red: "#D84F4F",
        gray: {
          100: "#f8f8f8",
          200: "#fafafa",
          300: "#e5e5e5",
          400: "#a0a0a0",
          500: "#8F9197",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#3C3C3B",
        }
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      }
    }
  },
  safelist: [
    'bg-blue-700',
    'shadow-card',
    {
      pattern: /bg-(blue|green|red|yellow|orange)-(100|200|300|400|500|600|700|800|900)/,
      variants: ['hover', 'focus', 'active']
    }
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
