"use client";

import { useEffect } from "react";

export function MoreInfo() {
  const html = `
<section data-c="ticketselectionbox2" class="margin-bottom-s">
  <div class="alert alert-info">
    <div class="paragraph external-content">
      <div class="u-position-relative js-moretext-wrapper">

        <div class="moretext js-moretext collapsed" data-qa="readMoreText" style="max-height: 96px;">
          <div class="moretext-teaser">
            <div>
              <b>Meia-entrada: Lei 12933/13 | Lei nº 12.933, de 26 dezembro de 2013</b><br><br>
              A Partir de 1/12, de acordo com decreto n° 8.537 de 5 de outubro de 2015, só serão vendidos ingressos de “meia entrada de estudantes”, para aqueles que tiverem as CIEs (Carteiras de Estudantes ) com os seguintes requisitos:<br>
              - Nome completo e data de nascimento do estudante<br>
              - Grau de escolaridade<br>
              - Foto do estudante<br>
              - Nome da instituição de ensino ao qual o estudante está matriculado<br>
              - Data de validade até o dia 31 de março do ano subsequente ao de sua expedição<br>
              - Certificação digital observando o disposto no inciso 2º do Art 1º da lei nº 12.933 de 2013<br>
              * O decreto n° 8.537, não permite que os estabelecimentos aceitem boletos ou carteirinhas de cursos, como comprovantes para a compra da meia-entrada.<br><br>

              Menor de 21 anos tem direito a meia entrada mediante apresentação de documento de identidade com foto (conforme Lei Municipal).<br><br>

              <b>Crianças até 02 anos:</b><br>
              Crianças até 1 ano e 11 meses tem acesso gratuito desde que permaneçam no colo dos responsáveis durante a apresentação.<br>
              A partir de 2 anos completos até 5 anos e 11 meses, as crianças têm direito à meia-entrada, mediante a apresentação da carteira de identidade ou certidão de nascimento.<br><br>
            </div>
          </div>
        </div>

        <div class="link moretext-toggle">
          <button type="button" class="btn btn-link moretext-toggle-more">
            <span class="link-variant">Leia mais</span>
          </button>

          <button type="button" class="btn btn-link moretext-toggle-less">
            <span class="link-variant">fechar informação</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</section>
  `;

  // ============================
  // JS — Leia mais / Fechar (idêntico ao Eventim)
  // ============================
  useEffect(() => {
    const wrapper = document.querySelector(".js-moretext-wrapper");
    if (!wrapper) return;

    const content = wrapper.querySelector(".js-moretext") as HTMLElement;
    const btnMore = wrapper.querySelector(".moretext-toggle-more") as HTMLElement;
    const btnLess = wrapper.querySelector(".moretext-toggle-less") as HTMLElement;

    if (!content || !btnMore || !btnLess) return;

    // Estado inicial
    btnLess.style.display = "none";

    // Abrir
    btnMore.addEventListener("click", () => {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.remove("collapsed");

      btnMore.style.display = "none";
      btnLess.style.display = "inline-block";
    });

    // Fechar
    btnLess.addEventListener("click", () => {
      content.style.maxHeight = "96px";
      content.classList.add("collapsed");

      btnMore.style.display = "inline-block";
      btnLess.style.display = "none";
    });

  }, []);

  // CSS do efeito igual ao Eventim
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .js-moretext {
        overflow: hidden;
        transition: max-height .35s ease;
      }
      .moretext-toggle button {
        padding: 0;
        margin-top: 8px;
      }
      .moretext-toggle-less {
        display: none;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
