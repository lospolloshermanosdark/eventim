function initIprimeMobileMenu(uid) {
  const btn = document.querySelector(`.uid${uid} p.iprimeNavBtn`);
  const menu = document.querySelector(`.uid${uid} ul.iprimeNavListMobile`);

  if (!btn || !menu) return;

  let isOpen = false;

  // Deixa o menu pronto
  menu.style.position = "absolute";
  menu.style.top = "0px";
  menu.style.transition = "top 0.3s ease";

  // Abre
  function openMenu() {
    const fullHeight = menu.scrollHeight;
    menu.style.top = fullHeight + "px";
    btn.innerText = "×";
    btn.style.color = "#ddd";
    isOpen = true;
  }

  // Fecha
  function closeMenu() {
    menu.style.top = "0px";
    btn.innerText = "≡";
    btn.style.color = "inherit";
    isOpen = false;
  }

  // Toggle
  btn.addEventListener("click", () => {
    isOpen ? closeMenu() : openMenu();
  });

  // Fecha ao clicar em item
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => closeMenu());
  });

  // Fecha ao redimensionar
  window.addEventListener("resize", () => closeMenu());
}

// Inicializar
initIprimeMobileMenu("1038660");
