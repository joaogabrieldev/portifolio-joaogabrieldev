import {
  Barlow,
  DM_Sans,
  Epilogue,
  Fraunces,
  Outfit,
  Syne,
  Ubuntu,
  Herr_Von_Muellerhoff,
  JetBrains_Mono,
  Geist_Mono,
} from "next/font/google";

/** Seções abaixo da Hero: geométrica contemporânea, ótima legibilidade */
export const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

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

/** Serif de apoio premium para assinatura/subtitulo */
export const fraunces = Fraunces({
  weight: ["300", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const epilogue = Epilogue({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const barlow = Barlow({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  weight: ["400"],
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});