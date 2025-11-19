"use client";

import { useEffect } from "react";

export function BackToTop() {
  const html = `
<section data-c="totop" class="c-narrow container back-to-top notPrinted">
  <div class="back-to-top-content">
    <span class="link js-back-to-top" data-qa="totop-link" role="button" tabindex="0">
      <i class="icon icon-arrow-up before-text" aria-hidden="true"></i>
      <span>Voltar para o topo</span>
    </span>
  </div>
</section>
  `;

  // --- JS para scroll suave (comportamento original Eventim) ---
  useEffect(() => {
    const btn = document.querySelector(".js-back-to-top");

    if (btn) {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    return () => {
      if (btn) btn.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>


      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
