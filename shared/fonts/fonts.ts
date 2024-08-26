import localFont from "next/font/local";

const grotesk = localFont({
  src: [
    {
      path: "../static-fonts/OverusedGrotesk-Light.otf",
      weight: "400",
      style: "normal",
    },
  ],
  preload: true,
  variable: "--grotesk",
});

export { grotesk };
