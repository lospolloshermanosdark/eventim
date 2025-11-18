"use client";

import F1Main from "@/components/F1Main/F1Main";
import { Footer } from "@/components/Footer";
import F1Header from "@/components/ui/header";
import Script from "next/script";

export default function Page() {
  return (
    <>
      {/* CMP wrapper */}
      <div id="cmpwrapper" className="cmpwrapper"></div>

      {/* Scripts específicos da página */}
 

      {/* iFrames ocultos */}
      <iframe name="__cmapiLocator" style={{ display: "none" }} />
      <iframe name="__cmpLocator" style={{ display: "none" }} />
      <iframe name="__uspapiLocator" style={{ display: "none" }} />
      <iframe name="__tcfapiLocator" style={{ display: "none" }} />

  
      {/* ADS placeholders */}
      <div id="place-ad-top" className="center text-center" />
      <div id="place-ad-top-duplicate" className="center text-center" />

      <F1Header />
      {/* 🔥 AQUI ENTRA O RESTANTE DO SEU CONTEÚDO DA LANDING PAGE */}

      <F1Main />
      <Footer />
    </>
  );
}
