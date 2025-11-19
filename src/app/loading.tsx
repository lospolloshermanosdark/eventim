export default function Loading() {

  const html = `
   <div id="preLoader" class="spinner">
    <div class="spinner-circle theme-text-border-color light-gray-border-left"></div>
    <div class="spinner-message theme-text-color">Carregando</div>
</div>
    `;

    
  return (
    <>
          {/* CSS padrão local */}
      <link
        id="ev-style-sheet"
        rel="stylesheet"
        href="/eventim/css/patterns.css"
      />

      {/* CSS contraste */}
      <link
        id="contrast-style"
        rel="stylesheet"
        href="/eventim/css/patterns-contrast.css"
        // @ts-ignore
        disabled
      />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
