export default function Loading() {
    const html = `
   <div id="preLoader" class="spinner">
    <div class="spinner-circle theme-text-border-color light-gray-border-left"></div>
    <div class="spinner-message theme-text-color">Carregando</div>
</div>
    `
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    );
}
