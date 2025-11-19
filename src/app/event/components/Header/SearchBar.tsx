"use client";

import { useEffect } from "react";

export default function SearchBar() {
  useEffect(() => {
    // carregar script externo
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "/staticsite/search-widgets/suggest-widget/3.23.1/suggest-widget.esm.js";
    document.body.appendChild(script);
  }, []);

  return (
    <suggest-widget
      version="3.23.1"
      class="hydrated"
      style={{ width: "100%" }}
    ></suggest-widget>
  );
}
