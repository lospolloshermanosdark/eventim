export function gerarTicketHTML(ticket: any) {
  const precoFormatado = ticket.preco.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  const unitValue = ticket.preco * 100;

  return `
    <div class="clearfix ticket-type-item-wrapper js-ticket-type-item"
         tabindex="-1"
         data-marketing-label-id=""
         data-marketing-label-name=""
         role="group"
         aria-labelledby="tt_${ticket.id}_details amount_text_${ticket.id}">
      
      <div class="clearfix ticket-type-item"
           data-qa="tickettype"
           data-tt-name="${ticket.nome}"
           data-tt-label=""
           data-tt-cb-program-name="">
        
        <!-- PARTE DA DESCRIÇÃO -->
        <div id="tt_${ticket.id}_details" class="ticket-type-item-first-part">
           
          <div class="ticket-type-desc">
            <div class="ticket-type-title">${ticket.nome}</div>
          </div>

          <div class="ticket-type-detail u-flex-v-center u-flex-basis-0">
            <div class="u-flex u-flex-column price-column">
              <div class="ticket-type-price" data-qa="tickettypeItem-price">
                R$&nbsp;${precoFormatado}
              </div>
            </div>
          </div>

        </div>

        <!-- STEPPER -->
        <div class="ticket-type-stepper">
          <div class="btn-group btn-stepper js-stepper"
               tabindex="-1"
               data-min="0"
               data-max="${ticket.max || 10}"
               data-step="1"
               data-step-first="1"
               data-unit-value="${unitValue}">
               
            <!-- BOTÃO MENOS -->
            <button type="button"
                    class="btn btn-alternative btn-sm btn-stepper-left js-track js-tracking js-stepper-less disabled"
                    title="Diminuir quantidade"
                    data-tracking-category="bestseat"
                    data-tracking-action="adjust_quantity"
                    data-tracking-label="remove"
                    data-track-name="click_event"
                    data-track-params='{"category":"detail_b","subcategory":"bestseat","element_selected":"adjust_qty_remove"}'
                    data-qa="less-tickets"
                    aria-controls="amount_text_${ticket.id}"
                    disabled>
              <span class="icon icon-minus" aria-hidden="true"></span>
            </button>

            <!-- QUANTIDADE -->
            <div id="amount_text_${ticket.id}"
                 class="btn-stepper-amount btn-stepper-amount-eventim js-stepper-amount-text"
                 data-qa="${ticket.setorTitle || "PLATEIA"}TicketAmount1"
                 role="status">0</div>

            <!-- INPUT HIDDEN -->
            <input class="js-stepper-amount js-cc-amount-selection"
                   data-cc-price-id="${ticket.priceId}"
                   type="hidden"
                   name="rs_menge_${ticket.id}"
                   value="0"
                   data-discount-level-id="${ticket.id}"
                   data-discount-level-name="${ticket.nome}"
                   data-selected-section-id="0"/>

            <!-- BOTÃO MAIS -->
            <button type="button"
                    class="btn btn-alternative btn-sm btn-stepper-right js-tracking js-track js-stepper-more js-focus-trigger"
                    title="Aumentar quantidade"
                    data-tracking-category="bestseat"
                    data-tracking-action="adjust_quantity"
                    data-tracking-label="add"
                    data-track-name="click_event"
                    data-track-params='{"category":"detail_b","subcategory":"bestseat","element_selected":"adjust_qty_add"}'
                    data-qa="more-tickets"
                    aria-controls="amount_text_${ticket.id}">
              <span class="icon icon-plus" aria-hidden="true"></span>
            </button>

            <!-- CONFIGURAÇÃO -->
            <script type="application/configuration">
            {
              "ticketTypeId": "${ticket.id}",
              "corporateBenefitId": "0",
              "isCttTarget": false,
              "isCttSource": false,
              "hasSections": false
            }
            </script>

          </div>
        </div>

      </div>
    </div>
  `;
}
