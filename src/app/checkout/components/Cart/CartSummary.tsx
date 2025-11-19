"use client";

import { useEffect } from "react";

type CartSummaryProps = {
  quantity: number;
  eventName: string;
  price: string;
  venue: string;
  date: string;
  subtotal: string;

  onContinue?: () => void;
  onBack?: () => void;
};

export default function CartSummary(props: CartSummaryProps) {
  const { quantity, eventName, price, venue, date, subtotal, onContinue, onBack } = props;

  useEffect(() => {
    const btnContinue = document.getElementById("btn-summary-continue");
    const btnBack = document.getElementById("btn-summary-back");

    if (btnContinue && onContinue) {
      btnContinue.addEventListener("click", onContinue);
    }

    if (btnBack && onBack) {
      btnBack.addEventListener("click", onBack);
    }

    return () => {
      if (btnContinue && onContinue) {
        btnContinue.removeEventListener("click", onContinue);
      }
      if (btnBack && onBack) {
        btnBack.removeEventListener("click", onBack);
      }
    };
  }, [onContinue, onBack]);

  const html = `
  <div class="row checkout-card-container">
    <div class="col-xs-12">

      <div class="row card theme-content-bg theme-element-radius standard-gray-shadow">
        <div class="card-content">
          <div class="checkout-mini-basket col-xs-12 padding-bottom-s">

            <h2 class="page-headline theme-text-light-color">Resumo</h2>

            <table class="checkout-mini-basket-table theme-text-light-color">

              <tr>
                <td class="checkout-mini-basket-table-col">
                  <table class="checkout-mini-basket-table-subtable">

                    <tr>
                      <td class="checkout-mini-basket-table-col">
                        <span data-qa="number-of-tickets">${quantity}</span>
                        <i class="icon icon-cross-old mini-basket-cross"></i>
                        <span data-qa="event-name">${eventName}</span>
                      </td>
                    </tr>

                    <tr>
                      <td class="mini-basket-details hidden-xs hidden-sm" colspan="2">${venue}</td>
                    </tr>

                    <tr>
                      <td class="mini-basket-details hidden-xs hidden-sm" colspan="2">${date}</td>
                    </tr>

                  </table>
                </td>

                <td class="checkout-mini-basket-table-col price padding-top-xs text-nowrap">
                  ${price}
                </td>
              </tr>

              <tr><td colspan="2"></td></tr>

              <tr class="price-sum">
                <td class="checkout-mini-basket-table-col">
                  Subtotal
                </td>

                <td class="checkout-mini-basket-table-col price text-nowrap">
                  ${subtotal}
                </td>
              </tr>

            </table>

            <div class="row margin-top-m">
              <div class="col-xs-12">
                <button
                  id="btn-summary-continue"
                  type="button"
                  class="btn btn-primary btn-lg btn-block theme-interaction-btn-bg theme-btn-font-color theme-btn-font-color-hover theme-button-radius"
                >
                  Continuar
                </button>
              </div>
            </div>

            ${
              props.onBack
                ? `
            <div class="row margin-top-s">
              <div class="col-xs-12">
                <button
                  id="btn-summary-back"
                  type="button"
                  class="btn btn-default btn-lg btn-block theme-button-radius"
                >
                  Voltar
                </button>
              </div>
            </div>
            `
                : ""
            }

          </div>
        </div>
      </div>

    </div>
  </div>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
