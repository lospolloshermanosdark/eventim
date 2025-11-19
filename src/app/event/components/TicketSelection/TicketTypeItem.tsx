"use client";

interface TicketTypeItemProps {
  ticket: any;
  index: number;
  isActive: boolean;
  onChange: (index: number | null) => void;
}

export function TicketTypeItem({ ticket, index, isActive, onChange }: TicketTypeItemProps) {
  const price = ticket.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

  return (
    <div
      className="clearfix ticket-type-item-wrapper js-ticket-type-item"
      tabIndex={-1}
      role="group"
      aria-labelledby={`tt_${ticket.id}_details amount_text_${ticket.id}`}
    >
      <div className="clearfix ticket-type-item" data-qa="tickettype" data-tt-name={ticket.nome}>
        
        {/* TÍTULO + PREÇO */}
        <div id={`tt_${ticket.id}_details`} className="ticket-type-item-first-part">
          <div className="ticket-type-desc">
            <div className="ticket-type-title">{ticket.nome}</div>
          </div>

          <div className="ticket-type-detail u-flex-v-center u-flex-basis-0">
            <div className="u-flex u-flex-column price-column">
              <div className="ticket-type-price">R$&nbsp;{price}</div>
            </div>
          </div>
        </div>

        {/* STEPPER */}
        <div className="ticket-type-stepper">
          <div
            className="btn-group btn-stepper js-stepper"
            data-min="0"
            data-max="10"
            data-step="1"
            data-step-first="1"
            data-unit-value={ticket.preco * 100}
          >
            {/* BOTÃO - */}
            <button
              type="button"
              className="btn btn-alternative btn-sm btn-stepper-left js-stepper-less"
              disabled={!isActive}
              onClick={() => onChange(null)}
            >
              <span className="icon icon-minus" />
            </button>

            {/* QUANTIDADE */}
            <div
              id={`amount_text_${ticket.id}`}
              className="btn-stepper-amount btn-stepper-amount-eventim js-stepper-amount-text"
            >
              {isActive ? 1 : 0}
            </div>

            {/* INPUT HIDDEN */}
            <input
              className="js-stepper-amount js-cc-amount-selection"
              type="hidden"
              name={`rs_menge_${ticket.id}`}
              value={isActive ? 1 : 0}
            />

            {/* BOTÃO + */}
            <button
              type="button"
              className="btn btn-alternative btn-sm btn-stepper-right js-stepper-more"
              disabled={isActive}
              onClick={() => onChange(index)}
            >
              <span className="icon icon-plus" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
