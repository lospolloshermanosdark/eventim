"use client";

export function Breadcrumb() {
  const html = `
<section data-c="breadcrumb" class="c-narrow container notPrinted">
  <ol class="u-flex u-flex-wrap list-item-unstyled" data-qa="breadcrumbs">
    <li class="breadcrumb-item">
      <a href="https://www.eventim.com.br/?affiliate=F1M" class="breadcrumbs-link link" data-qa="breadcrumb-home">Home</a>
    </li>
    <li class="breadcrumb-item">
      <a href="https://www.eventim.com.br/artists/?affiliate=F1M" class="breadcrumbs-link link" data-qa="breadcrumb-artists">Artistas</a>
    </li>
    <li class="breadcrumb-item">
      <a href="https://www.eventim.com.br/artist/formula-1/?affiliate=F1M" class="breadcrumbs-link link" data-qa="breadcrumb-artistpage">F1 SÃO PAULO</a>
    </li>
    <li class="breadcrumb-item">
      <a href="https://www.eventim.com.br/artist/formula-1/?affiliate=F1M" class="breadcrumbs-link link" data-qa="breadcrumb-eventlisting">
        FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2026
      </a>
    </li>
    <li class="breadcrumb-item">
      <a href="https://www.eventim.com.br/event/formula-1-msc-cruises-grande-premio-de-sao-paulo-2026-autodromo-de-interlagos-20921273/?affiliate=F1M" 
         class="breadcrumbs-link link" data-qa="breadcrumb-eventpage">
         06/11/2026 ─ 08/11/2026
      </a>
    </li>
  </ol>
</section>
  `;

  return (
    <>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
