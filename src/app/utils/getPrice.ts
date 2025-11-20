export function getPriceFromSources(searchParams: URLSearchParams) {
  // 1 — Tenta pegar do localStorage
  try {
    const raw = localStorage.getItem("cart");
    if (raw) {
      const cart = JSON.parse(raw);
      if (cart?.total) {
        return Number(cart.total); // já vem 795, 4150, 1200, etc (SEM centavos)
      }
    }
  } catch {}

  const urlAmount = searchParams.get("amount");
  if (urlAmount) return Number(urlAmount);

  return 0;
}
