import { tv } from "tailwind-variants";

export const buttonStyles = tv({
  base: "blob-hide rounded-lg border border-primary-900 bg-primary-200 py-3 outline-1 outline-offset-4 hover:outline focus:outline dark:border-primary-100 dark:bg-primary-800",
  variants: {
    variant: {
      default: "w-full text-sm",
      navigation: "flex w-14 justify-center text-2xl",
    },
    withIcons: {
      true: "flex items-center justify-center gap-x-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const headingStyles = tv({
  base: "font-serif",
  variants: {
    level: {
      h1: "text-4xl lg:text-6xl",
      h2: "text-3xl lg:text-4xl",
      h3: "text-2xl lg:text-3xl",
      h4: "text-xl lg:text-2xl",
    },
  },
});
