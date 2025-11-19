"use client";

import Image from "next/image";
import { useState } from "react";
import ProgressBar from "../ProgressBar";

type CartMainProps = {
  title: string;
  quantity: number;
  total: string;
  eventName: string;
  price: string;
  venue: string;
  date: string;
  promoter?: string;
  image: string;
};

export default function CartMain({
  title,
  quantity,
  total,
  eventName,
  price,
  venue,
  date,
  promoter,
  image
}: CartMainProps) {

  return (
    <div className="col-xs-12 col-md-8">

      {/* HEADER */}




      <div className="main-ticket-card-headline card-on-mobile padding-horizontally-m-on-mobile padding-bottom-m-on-mobile margin-top-s">

        <span className="main-ticket-card-headline-text">
          <h1 className="card-headline theme-text-light-color p-font-checkout">
            {title}
          </h1>

          <span className="main-ticket-card-headline-price">
            {quantity} ingresso{quantity > 1 ? "s" : ""},&nbsp;
            <span>{total}</span>
          </span>
        </span>

        {/* <div className="main-ticket-card-headline-button-wrapper visible-sm visible-xs margin-left-m">
          <button className="main-ticket-card-headline-button btn btn-primary btn-sm theme-btn">
            Continuar
          </button>
        </div> */}
      </div>

      {/* CARD DO INGRESSO */}
      <section>
        <div className="row card theme-content-bg theme-text-color theme-element-radius standard-gray-shadow">
          <div className="col-xs-12">
            <div className="row">

              {/* IMAGEM */}
              <div className="main-ticket-card-image col-xs-12 card-section bottom-separator theme-element-border">
                <div className="main-ticket-card-ticketimage square-image">

                  <Image
                    className="fluid-image with-blurred-bg"
                    alt={eventName}
                    src={image}
                    width={222}
                    height={222}
                  />

                </div>

              </div>

              {/* INFORMAÇÕES */}
              <div className="hidden-xs card-content">
                <div className="col-xs-12 card-section theme-element-border">
                  <div className="row">
                    <div className="col-xs-12 main-ticket-card-eventinfo main-ticket-card-grid">

                      <div className="ticket-amount main-ticket-card-emphasized-info frontspace">
                        {quantity} x
                      </div>

                      <div className="event-name main-ticket-card-emphasized-info middlespace">
                        {eventName}
                      </div>

                      <div className="ticket-price main-ticket-card-emphasized-info main-ticket-card-price endspace">
                        {price}
                      </div>

                      <div className="venue-info normalspace">{venue}</div>

                      <div className="time normalspace">{date}</div>

                      {promoter && (
                        <div className="promoter-info normalspace">
                          Promotor: {promoter}
                        </div>
                      )}

                    </div>
                  </div>
                </div>

                {/* REMOVE */}
                <div className="col-xs-12 main-ticket-card-grid card-section top-separator">
                  <button className="btn-link endspace checkout-card-container btn">
                    <span className="link delete-btn-label">remover ingresso</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MOBILE RESUMO */}
      {/* <div className="hidden-md hidden-lg">
        <div className="row">
          <div className="col-xs-12 margin-top-m">
            <div className="row card theme-content-bg theme-element-radius standard-gray-shadow">

              <div className="checkout-mini-basket col-xs-12 padding-bottom-s">
                <h2 className="page-headline theme-text-light-color">Resumo</h2>

                <table className="checkout-mini-basket-table theme-text-light-color">

                  <tr>
                    <td>
                      {quantity} <i className="icon icon-cross-old mini-basket-cross"></i>
                      {eventName}
                    </td>

                    <td className="price text-nowrap">{price}</td>
                  </tr>

                  <tr><td colSpan={2} className="mini-basket-details">{venue}</td></tr>
                  <tr><td colSpan={2} className="mini-basket-details">{date}</td></tr>

                  <tr className="price-sum">
                    <td>
                      Subtotal
                      <div className="price-sum-subtext theme-text-marginal-color">
                        Incluindo taxas.
                      </div>
                    </td>
                    <td className="price text-nowrap">{total}</td>
                  </tr>

                </table>

                <button className="btn btn-primary btn-lg btn-block theme-interaction-btn-bg theme-button-radius">
                  Continuar
                </button>

              </div>

            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
}
