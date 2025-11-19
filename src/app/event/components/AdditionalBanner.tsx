"use client";

export function AdditionalBanner() {
  const html = `
<section data-c="additionalcontent" class="c-narrow">
  <div class="container js-track-teaser-general" data-component="additionalcontent" data-teaser-row="3" data-cid="additionalcontent_3">
    <div class="row">
      <div class="col-xs-12">

        <picture>
          <source
            srcset="./eventim/imgs/canaloficial-bannerzao.png"
            data-srcset="./eventim/imgs/canaloficial-bannerzao.png"
            media="(max-width: 659px)"
          >
          <img
            src="./eventim/imgs/canaloficial-bannerzao.png"
            data-src="./eventim/imgs/canaloficial-bannerzao.png"
            class="fluid-image u-radius lazyloaded"
            alt=". "
          >
        </picture>

      </div>
    </div>
  </div>
</section>
  `;

  // CSS mínimo para imitar o comportamento do Eventim
  return (
    <>
      <style>
        {`
          .fluid-image {
            width: 100%;
            height: auto;
            display: block;
          }
          .u-radius {
            border-radius: 4px;
          }
        `}
      </style>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
