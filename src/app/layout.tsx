import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";

const formula1 = localFont({
  src: [
    {
      path: "./fonts/Formula1-Regular_web_0.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Formula1-Bold_web_0.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Formula1-Wide_web_0.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-formula1",
});

export const metadata: Metadata = {
  title: "FORMULA 1 MSC CRUISES GP São Paulo 2026",
  description:
    "Compre seu ingresso para o FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2026.",
  icons: {
    icon: "https://www.eventim.com.br/campaign/_assets/e20b97eb2f49e269a0238d41d5a90e2e/gfx/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
    
        <link rel="stylesheet" href="https://www.eventim.com.br/campaign/_assets/e20b97eb2f49e269a0238d41d5a90e2e/fontawesome/css/v4-shims.min.css?1761734868" />
        <link rel="stylesheet" href="https://www.eventim.com.br/campaign/_assets/e20b97eb2f49e269a0238d41d5a90e2e/fontawesome/css/v5-font-face.min.css?1761734868" />
        <link rel="stylesheet" href="https://www.eventim.com.br/campaign/typo3temp/assets/compressed/merged-9216f1d014c79912b204fd6666370876.css?1762783130" />
        <link rel="stylesheet" href="https://www.eventim.com.br/campaign/_assets/e20b97eb2f49e269a0238d41d5a90e2e/fontawesome/css/all.css?1761734868" />
        {/* Scripts globais usados pelo site inteiro */}

        <Script
          src="//unpkg.com/same-runtime/dist/index.global.js"
          strategy="afterInteractive"
        />

        <Script src="https://www.eventim.com.br/campaign/_assets/e20b97eb2f49e269a0238d41d5a90e2e/JavaScript/Inline/optimizely.js?1761734868"></Script>
  
    {/* Google Tag base */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17742300300"
        />

        {/* Configuração */}
        <Script id="google-ads-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17742300300');
          `}
        </Script>
      </head>

      <body className={`antialiased directionltr tree-1085 ${formula1.variable}`}>
        {children}


        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script src="/js/script.js" strategy="afterInteractive" />
        <Script src="/js/menu.js" strategy="afterInteractive" />
<Script src="/js/mobile-menu.js" strategy="afterInteractive" />

        
      </body>
    </html>
  );
}
