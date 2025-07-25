/** @type {import('tailwindcss').Config} */
const { platformSelect, platformColor } = require("nativewind/theme");

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Text
        label: platformSelect({
          ios: platformColor("label"),
          android: platformColor("?android:attr/textColorPrimary"),
          default: "#000000",
        }),
        secondaryLabel: platformSelect({
          ios: platformColor("secondaryLabel"),
          android: platformColor("?android:attr/textColorSecondary"),
          default: "#6b7280", // Tailwind gray-500 fallback
        }),

        // Backgrounds
        systemBg: platformSelect({
          ios: platformColor("systemBackground"),
          android: platformColor("?android:colorBackground"),
          default: "#ffffff",
        }),
        secondaryBg: platformSelect({
          ios: platformColor("secondarySystemBackground"),
          android: platformColor("?android:attr/colorBackgroundFloating"),
          default: "#f9fafb", // Tailwind gray-50 fallback
        }),

        // Separators
        separator: platformSelect({
          ios: platformColor("separator"),
          android: platformColor("?android:attr/listDivider"),
          default: "#e5e7eb", // Tailwind gray-200
        }),

        // Accents
        accent: platformSelect({
          ios: platformColor("tintColor"),
          android: platformColor("?attr/colorAccent"),
          default: "#2563eb", // Tailwind blue-600
        }),

        // Semantic states
        success: platformSelect({
          ios: platformColor("systemGreen"),
          android: platformColor("?android:colorHoloGreenLight"),
          default: "#16a34a", // Tailwind green-600
        }),
        warning: platformSelect({
          ios: platformColor("systemOrange"),
          android: platformColor("?android:colorHoloOrangeLight"),
          default: "#f59e0b", // Tailwind amber-500
        }),
        danger: platformSelect({
          ios: platformColor("systemRed"),
          android: platformColor("?android:colorError"),
          default: "#dc2626", // Tailwind red-600
        }),
      },
    },
  },
  plugins: [],
}

