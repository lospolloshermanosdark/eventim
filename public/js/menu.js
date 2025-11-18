// =============================
// GARANTIR NAMESPACE GLOBAL
// =============================
window.ilNavMngr = window.ilNavMngr || function() {};
window.iprimeNavMobileToggle = window.iprimeNavMobileToggle || function() {};
window.iprimeNavLinks = window.iprimeNavLinks || function() {};

(function () {
  console.log("[MENU] script carregado");

  /* ============================
       MENU DESKTOP + MOBILE
  ============================ */
  window.ilNavMngr = function (bxIdPc, bxIdBtn, bxIdMob) {
    const navPc = document.querySelector(`#c${bxIdPc} ul`);
    if (navPc) {
      navPc.classList.add("iprimeNavListPc");
      ilNavLiClsSet(navPc);
    }

    const navBtn = document.querySelector(`#c${bxIdBtn} p`);
    if (navBtn) navBtn.classList.add("iprimeNavBtn");

    const navMob = document.querySelector(`#c${bxIdMob} ul`);
    if (navMob) {
      navMob.classList.add("iprimeNavListMobile");
      ilNavLiClsSet(navMob);
    }

    function ilNavLiClsSet(ul) {
      ul.querySelectorAll(":scope > li").forEach((li) => {
        if (li.querySelector(".ilNavSclLink")) li.classList.add("ilNavSclLinksBox");
        if (li.querySelector(".ilNavLangLink")) li.classList.add("ilNavLangLinkBox");
        if (li.querySelector(".ilNavEvLink"))  li.classList.add("ilNavEvLinkBox");
      });
    }
  };

  /* ============================
        TOGGLE MOBILE
  ============================ */
  window.iprimeNavMobileToggle = function (uid) {
    const navBtn = document.querySelector(`.uid${uid} p.iprimeNavBtn`);
    const navMob = document.querySelector(`.uid${uid} ul.iprimeNavListMobile`);
    if (!navBtn || !navMob) return;

    navBtn.style.cursor = "pointer";

    navBtn.addEventListener("click", () => {
      window.iprimeNavElPosition(navMob) === 0
        ? window.iprimeNavListShow(navBtn, navMob)
        : window.iprimeNavListHide(navBtn, navMob);
    });

    navMob.addEventListener("click", () => window.iprimeNavListHide(navBtn, navMob));
    window.addEventListener("resize", () => window.iprimeNavListHide(navBtn, navMob));
  };

  /* ============================
        SMOOTH SCROLL
  ============================ */
  window.iprimeNavLinks = function (uid, offset) {
    const navLinks = document.querySelectorAll(`.uid${uid} a.internalLink`);
    navLinks.forEach((link) => {
      const id = "#" + link.href.split("#")[1];
      link.style.cursor = "pointer";

      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (!target) return;

        const position =
          target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: position, behavior: "smooth" });
      });
    });
  };

  /* ============================
        HELPERS
  ============================ */
  window.iprimeNavListShow = (btn, mob) => {
    mob.style.top = mob.offsetHeight + "px";
    btn.innerText = "×";
    btn.style.color = "#ddd";
  };

  window.iprimeNavListHide = (btn, mob) => {
    mob.style.top = "0";
    btn.innerText = "≡";
    btn.style.color = "inherit";
  };

  window.iprimeNavElHeight = (el) => el.offsetHeight;
  window.iprimeNavElPosition = (el) => el.offsetTop;

  /* ============================
        AUTO INIT
  ============================ */
  window.addEventListener("load", () => {
    window.ilNavMngr("1038654", "1038651", "1038648");
    window.iprimeNavMobileToggle("1038660");
    window.iprimeNavLinks("1038660", 60);
  });
})();

