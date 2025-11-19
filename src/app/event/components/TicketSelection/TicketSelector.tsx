"use client";

import { gerarTicketHTML } from "@/app/utils/gerarTickets";
import { setores } from "@/app/utils/setores";
import { useEffect, useState } from "react";

export default function TicketSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 👉 CAPTURA O SETOR DA URL
  const [selectedSector, setSelectedSector] = useState<string>("") as any;
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const setorId = params.get("id");

  if (setorId && setores[setorId]) {
    setSelectedSector(setores[setorId]); // setor escolhido
  } else {
    setSelectedSector(setores["setor-a"]); // setor padrão
  }
}, []);

  // CONFIGURAÇÕES DOS INGRESSOS (dinâmico)
  const ticketsData = selectedSector?.tickets || [];


  // INSERE DINAMICAMENTE O SETOR NO HTML
  const htmlForm = `
<div class="event-list-item">
  <div class="event-list-item margin-bottom-s u-shadow standard-gray-shadow js-pc-card" data-qa="price-category">

    <div class="event-list-item-wrapper pc-list-item-space clearfix js-product-type" data-cc-formcount="0_1_tickets">
      <div class="not-in-focus js-not-in-focus" style="display: none;"></div>

      <form class="event-list-content js-focus-item js-form-timestamp"
            action="https://seguro.ingressosf12026saopaulo.site/api/public/shopify?product=1839015532257&store=18390&id=orangeTreeClub"
            name="pk40500187"
            method="post"
            data-qa="pc-list-number-PLATEIA">

        <!-- INPUTS OCULTOS (mantidos) -->
        <input type="hidden" name="token" value="NSUAMXVVQYXHEOO">
        <input type="hidden" name="fun" value="wk">
        <input type="hidden" name="doc" value="shoppingCart">
        <input type="hidden" name="affiliate" value="F1M">
        <input type="hidden" name="ev_id" value="20759396" class="js-cc-evid">
        <input type="hidden" name="pk_id" value="40500187" class="js-cc-pkid-1">
        <input type="hidden" name="timestamp" value="" class="js-timestamp-input">
        <input type="hidden" name="backToPrevPage" value="/event/trilhas-noite-cheia-de-lua-de-sol-palacio-das-artes-20759396/?affiliate=F1M" class="js-cc-back">
        <input type="hidden" name="errordoc" value="globalError">
        <input type="hidden" name="promo_id" value="0" class="js-cc-promoid-1">

        <!-- CABEÇALHO DO SETOR -->
        <div class="pc-list-detail event-list-head">
          <div class="pc-list-category">
            <span id="sectorTitle">${selectedSector?.nome || "..."}</span>
          </div>
        </div>


        <!-- 🎯 LISTA DE TICKETS DINÂMICOS -->
        <div class="event-list-content-item clearfix js-stepper-sum js-ticket-selection-with-limits"
             data-event-has-sections="false">

          <div class="ticket-type-list">

            <!-- AQUI ENTRA O GERADOR -->
            ${ticketsData.map(gerarTicketHTML).join("")}

          </div>


          <!-- CTA PRINCIPAL -->
          <div class="clearfix ticket-type-cta">
            <button type="submit"
              class="btn btn-primary btn-lg btn-block js-stepper-action js-cat-check-trigger js-cc-submit-btn"
              data-cc-formcount="0_1_tickets"
              data-pk-number="1"
              disabled
              style="display:none;">
              
              <i class="icon icon-cart"></i>
              <span class="btn-text ticket-type-quantity js-stepper-quantity-display">0 Ingressos</span>,
              <span class="btn-text ticket-type-sum js-stepper-sum-display">R$ 0,00</span>
            </button>
          </div>

        </div>

      </form>
    </div>
  </div>
</div>
`;

  // LÓGICA DO EVENTIM
  useEffect(() => {
    const interval = setInterval(() => {
      const plusButtons = document.querySelectorAll(".ticket-type-stepper .btn-stepper-right");
      const minusButtons = document.querySelectorAll(".ticket-type-stepper .btn-stepper-left");
      const amounts = document.querySelectorAll(".btn-stepper-amount");
      const items = document.querySelectorAll(".js-ticket-type-item");

      if (plusButtons.length === 0) return;
      clearInterval(interval);

      plusButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          const internalId = "ID_" + index;
          setSelectedId(internalId);
          updateStepper(index);
        });
      });

      minusButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
          if (selectedId === "ID_" + index) {
            setSelectedId(null);
            updateStepper(null);
          }
        });
      });

      function updateStepper(activeIndex: number | null) {
        items.forEach((item, i) => {
          const amt = amounts[i];
          const minus = minusButtons[i] as HTMLButtonElement;
          const plus = plusButtons[i] as HTMLButtonElement;

          const isActive = activeIndex === i;

          amt.textContent = isActive ? "1" : "0";

          minus.disabled = !isActive;
          plus.disabled = isActive;

          item.classList.toggle("ticket-selected", isActive);
        });

        const cta = document.querySelector(".js-cc-submit-btn") as HTMLButtonElement;
        const qty = document.querySelector(".js-stepper-quantity-display") as HTMLElement;
        const sum = document.querySelector(".js-stepper-sum-display") as HTMLElement;

        cta.style.display = "block";

        if (activeIndex !== null) {
          const ticket = ticketsData[activeIndex];

          cta.classList.remove("disabled");
          cta.removeAttribute("disabled");

          const valorFormatado = ticket.preco.toLocaleString("pt-BR") + ",00";

          qty.textContent = `1 Ingresso`;
          sum.textContent = `R$ ${valorFormatado}`;

          // REDIRECIONA PARA O CHECKOUT COM SETOR DA URL
          cta.onclick = (e) => {
            e.preventDefault();

            const url = `/checkout?id=${ticket.id}&nome=${encodeURIComponent(ticket.nome)}&preco=${ticket.preco}&setor=${encodeURIComponent(selectedSector?.nome || "")}`;

            window.location.href = url;
          };
        } else {
          cta.classList.add("disabled");
          cta.setAttribute("disabled", "");

          qty.textContent = "0 Ingressos";
          sum.textContent = "R$ 0,00";

          cta.onclick = (e) => e.preventDefault();
        }
      }

      if (selectedId) {
        const i = Number(selectedId.replace("ID_", ""));
        updateStepper(i);
      } else {
        updateStepper(null);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [selectedId, selectedSector]);

  return <div dangerouslySetInnerHTML={{ __html: htmlForm }} />;
}
