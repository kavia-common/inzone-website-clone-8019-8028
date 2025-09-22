import next from "eslint-config-next";

export default [
  {
    ignores: ["out/**"],
  },
  next,
  {
    rules: {
      "react/jsx-key": "warn",
      "jsx-a11y/anchor-is-valid": "off",
      "@next/next/no-img-element": "off"
    },
  },
];
