export function formatBR(valueInCentavos: number) {
  return (valueInCentavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
