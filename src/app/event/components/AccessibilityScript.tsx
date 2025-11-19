"use client";

import { useEffect } from "react";

export default function AccessibilityScript() {
  useEffect(() => {
    console.log("AccessibilityScript loaded");
    function waitForElements() {
      const required = [
        "#ev-style-sheet",
        "#contrast-style",
        ".js-contrast-on",
        ".js-contrast-off",
        ".js-zooming-minus",
        ".js-zooming-plus"
      ];

      const allExist = required.every((sel) => document.querySelector(sel));

      if (!allExist) {
        // tenta de novo até tudo estar carregado
        setTimeout(waitForElements, 80);
        return;
      }

      initAccessibility();
    }

    waitForElements();

    function initAccessibility() {
      const baseCss = document.getElementById("ev-style-sheet") as HTMLLinkElement;
      const contrastCss = document.getElementById("contrast-style") as HTMLLinkElement;

      const btnOn = document.querySelector(".js-contrast-on") as HTMLElement;
      const btnOff = document.querySelector(".js-contrast-off") as HTMLElement;

      const zoomMinus = document.querySelector(".js-zooming-minus") as HTMLButtonElement;
      const zoomPlus = document.querySelector(".js-zooming-plus") as HTMLButtonElement;

      /** CONTRASTE */
      const getSession = (k: string) => sessionStorage.getItem(k);
      const setSession = (k: string, v: string) => sessionStorage.setItem(k, v);

      let enabled = getSession("contrastEnabled") === "true";

      const applyContrast = (on: boolean) => {
        baseCss.disabled = on;
        contrastCss.disabled = !on;

        btnOn.classList.toggle("hidden", on);
        btnOff.classList.toggle("hidden", !on);

        enabled = on;
        setSession("contrastEnabled", on ? "true" : "false");
      };

      // inicial
      applyContrast(enabled);

      btnOn.onclick = () => applyContrast(true);
      btnOff.onclick = () => applyContrast(false);

      /** ZOOM */
      let zoom = Number(getSession("zoomSize") || 1);
      const max = 2;
      const step = 0.25;

      const applyZoom = (z: number) => {
        document.documentElement.style.transform = `scale(${z})`;
        document.documentElement.style.transformOrigin = "0 0";
        zoomPlus.disabled = z >= max;
        zoomMinus.disabled = z <= 1;
      };

      zoomPlus.onclick = () => {
        zoom = Math.min(max, zoom + step);
        setSession("zoomSize", zoom.toString());
        applyZoom(zoom);
      };

      zoomMinus.onclick = () => {
        zoom = Math.max(1, zoom - step);
        setSession("zoomSize", zoom.toString());
        applyZoom(zoom);
      };

      if (zoom > 1) applyZoom(zoom);
    }

  }, []);

  return null;
}
