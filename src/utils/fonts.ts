import { DM_Sans, Syne, Ubuntu } from "next/font/google";

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

/** Corpo / UI: geométrica limpa, mais caráter que Inter */
export const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

/** Títulos / display: forte e memorável */
export const syne = Syne({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});
