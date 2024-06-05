import { Bebas_Neue, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const bebas = Bebas_Neue({
  weight: ["400"],
  style: "normal",
  subsets: ["latin-ext"],
});
