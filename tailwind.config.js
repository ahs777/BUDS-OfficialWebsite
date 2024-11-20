/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark Blue Theme
        'dark-divider': '#475569',
        'dark-highlight': '#93C5FD',
        'dark-accent-secondary': '#60A5FA',
        'dark-accent-primary': '#3B82F6',
        'dark-text-secondary': '#94A3B8',
        'dark-text-primary': '#F1F5F9',
        'dark-secondary-bg': '#334155',
        'dark-bg': '#1E293B',

        // Light Blue Theme
        'light-divider': '#E2E8F0',
        'light-highlight': '#93C5FD',
        'light-accent-secondary': '#60A5FA',
        'light-accent-primary': '#3B82F6',
        'light-text-secondary': '#64748B',
        'light-text-primary': '#1E293B',
        'light-secondary-bg': '#FFFFFF',
        'light-bg': '#F8FAFC',
      },
    },
  },
  plugins: [],
}

