"use client";

import { useEffect } from "react";

interface DeliveryFormProps {
  onContinue: () => void;   // avança para pagamento
  onBack?: () => void;       // volta para carrinho
}

export default function DeliveryForm({ onContinue, onBack }: DeliveryFormProps) {
  
  useEffect(() => {
    const btn = document.getElementById("btn-delivery-continue");
    if (btn) btn.addEventListener("click", onContinue);

    const backBtn = document.getElementById("btn-delivery-back");
    if (backBtn && onBack) backBtn.addEventListener("click", onBack);

    return () => {
      if (btn) btn.removeEventListener("click", onContinue);
      if (backBtn && onBack) backBtn.removeEventListener("click", onBack);
    };
  }, [onContinue, onBack]);

    const html = `
    
   <div class="col-xs-12 col-md-8">
  <div
    class="row card standard-gray-shadow theme-content-bg theme-text-color checkout-card-container"
  >
    <!---->
    <div class="card-content">
      <div data-qa="content" class="">
        <!---->
        <div class="ng-star-inserted">
          <div>
            <ev-selection-list
              data-qa="delivery-methods"
              infoicontrackingsource="shipping"
              iconpropertyname="iconClassName"
              listname="delivery-methods"
              ><section data-qa="selection-list" class="col-xs-12 card-section">
                <div
                  class="selection-list-edit u-flex-justify-between ng-star-inserted"
                >
                  <div class="ng-star-inserted">
                    <h2
                      data-qa="selection-list-headline"
                      class="selection-list-headline theme-headline-color u-font-weight-bold"
                    >
                      Escolha uma Forma de Entrega
                    </h2>
                  </div>
                  <!----><button
                    type="button"
                    role="link"
                    data-qa="edit-button"
                    class="btn-link link hidden"
                    tabindex="-1"
                  >
                    <span class="link-text">alterar</span
                    ><i class="icon icon-chevron-right"></i>
                  </button>
                </div>
                <!----><!---->
                <div class="margin-top-s">
                  <ul data-qa="list" class="selection-list">
                    <li
                      role="radio"
                      class="selection-list-item no-margin selection-list-border ng-star-inserted"
                      id="item-729__angvxusyj"
                      tabindex="0"
                      aria-checked="false"
                      data-qa="delivery-method_2_0"
                    >
                      <div class="sl-radiobutton ng-star-inserted">
                        <div
                          class="styled-checkbox theme-switch-bg theme-switch-border no-padding-right"
                        >
                          <input
                            type="radio"
                            aria-hidden="true"
                            tabindex="-1"
                            class="radio-input"
                            name="radio-delivery-methods"
                            id="styled-radio-item-729__angvxusyj"
                          /><label
                            class="label"
                            for="styled-radio-item-729__angvxusyj"
                          ></label>
                        </div>
                      </div>
                      <div
                        data-qa="list-item"
                        class="sl-description ng-star-inserted"
                      >
                        <span
                          data-qa="headline"
                          class="sl-title theme-text-color"
                          title="Ingresso Digital em PDF | TicketDirect (Grátis)"
                          ><ev-forms-formatter class="ng-star-inserted"
                            ><span class="ng-star-inserted"
                              ><span class="ng-star-inserted"
                                >Ingresso Digital em PDF | TicketDirect
                                (Grátis)</span
                              ><!----><!----><!----><!----><!----><!----><!----><!----><span
                                class="ng-star-inserted"
                              >
                              </span
                              ><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><span
                                class="ng-star-inserted"
                                >.</span
                              ><!----><!----><!----><!----><!----><!----><!----></span
                            ><!----></ev-forms-formatter
                          ><!----><!----><!----><!----><span
                            >&nbsp;
                            <a
                              tabindex="0"
                              data-qa="info-icon"
                              class="sl-link ng-star-inserted"
                              aria-label="Informações adicionais:"
                              ><i class="icon icon-info"></i></a
                            ><!----></span
                          ></span
                        ><span
                          data-qa="description"
                          class="sl-info ng-star-inserted"
                          >Seu ingresso para download quando e onde você
                          quiser.</span
                        ><!----><span
                          data-qa="marginal"
                          class="sl-highlight ng-star-inserted"
                          ><!----><span class="ng-star-inserted"
                            >R$&nbsp;0,00</span
                          ><!----></span
                        ><!---->
                      </div>
                      <div data-qa="logo-icon" class="sl-icon ng-star-inserted">
                        <!----><i
                          class="icon icon-delivery-printathome theme-text-variant-color ng-star-inserted"
                        ></i
                        ><!---->
                      </div>
                      <!---->
                    </li>
                    <!----><!---->
                  </ul>
                  <div data-qa="content" hidden="">
                    <div data-qa="content-item" class="row ng-star-inserted">
                      <div><!----><!----><!----><!----></div>
                    </div>
                    <!---->
                  </div>
                </div>
                <!---->
              </section></ev-selection-list
            >
            <div class="col-xs-12 card-separator-spacer">
              <hr aria-hidden="true" class="card-separator" />
            </div>
          </div>
        </div>
        <!---->
        <div class="ng-star-inserted">
          <div>
            <ev-customer-data evmobilenumberhint=""
              ><form
                novalidate=""
                data-qa="customerData"
                class="validation ng-untouched ng-pristine ng-valid"
              >
                <div>
                  <section class="card-headline-section col-xs-12 card-section">
                    <h2 class="inner-card-headline">Preencha Seus Dados</h2>
                  </section>
                  <ev-forms-shocu
                    class="checkout-form-container ng-tns-c544255543-2 ng-star-inserted"
                    ><div
                      class="validation z-index-flyout ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid"
                      data-qa="dynamic-form-invoiceData"
                    >
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerSalutation_adh9cvjpu"
                                          ><span>Saudação</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <ev-forms-radioboxes
                                    class="ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    ><div
                                      class="radio-group radio-group--with-label form-group"
                                      aria-label="Saudação"
                                    >
                                      <div
                                        class="styled-checkbox theme-switch-bg theme-switch-color theme-switch-border float-left ng-star-inserted"
                                      >
                                        <input
                                          type="radio"
                                          class="radio-input"
                                          name="customerSalutation-_xov3fpyie"
                                          id="_xov3fpyie-0"
                                          value="Sra."
                                          data-qa="option-customerSalutation"
                                        /><label
                                          class="theme-text-color label"
                                          for="_xov3fpyie-0"
                                          data-qa="option-label-customerSalutation"
                                          ><span
                                            data-qa="option-label"
                                            class="ng-star-inserted"
                                            >Sra.</span
                                          ><!----><!----></label
                                        >
                                      </div>
                                      <div
                                        class="styled-checkbox theme-switch-bg theme-switch-color theme-switch-border display-inline-block ng-star-inserted"
                                      >
                                        <input
                                          type="radio"
                                          class="radio-input"
                                          name="customerSalutation-_xov3fpyie"
                                          id="_xov3fpyie-1"
                                          value="Sr."
                                          data-qa="option-customerSalutation"
                                        /><label
                                          class="theme-text-color label"
                                          for="_xov3fpyie-1"
                                          data-qa="option-label-customerSalutation"
                                          ><span
                                            data-qa="option-label"
                                            class="ng-star-inserted"
                                            >Sr.</span
                                          ><!----><!----></label
                                        >
                                      </div>
                                      <!---->
                                    </div></ev-forms-radioboxes
                                  ><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-6 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerFirstName_xrsipuhv7"
                                          ><span>Nome / Sobrenome</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerFirstName"
                                    id="customerFirstName_xrsipuhv7"
                                    data-qa="input-customerFirstName"
                                    autocomplete="given-name"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerFirstName_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <div
                            class="col-xs-12 col-sm-6 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerLastName_x3mwpoadz"
                                          ><span>Sobrenome</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerLastName"
                                    id="customerLastName_x3mwpoadz"
                                    data-qa="input-customerLastName"
                                    autocomplete="family-name"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerLastName_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerDateOfBirth_zpfg4mfk9"
                                          ><span>Data de nascimento</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><!----><!----><!----><!----><!----><!----><ev-forms-date-field
                                    class="ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    data-qa="input-customerDateOfBirth"
                                    ><div class="row">
                                      <div class="col-xs-12">
                                        <div class="combined-date-input">
                                          <label
                                            class="sr-only ng-star-inserted"
                                            for="customerDateOfBirth_zpfg4mfk90"
                                          >
                                            Data de nascimento dia </label
                                          ><input
                                            type="tel"
                                            dir="ltr"
                                            autocorrect="off"
                                            autocapitalize="off"
                                            spellcheck="false"
                                            class="form-control theme-text-color standard-gray-border date-input no-sign text-left ng-star-inserted"
                                            id="customerDateOfBirth_zpfg4mfk90"
                                            placeholder="DD"
                                            tabindex="0"
                                            data-qa="input-day"
                                            autocomplete="bday-day"
                                            aria-required="true"
                                            aria-invalid="false"
                                            aria-disabled="false"
                                            aria-errormessage="customerDateOfBirth_error"
                                          /><span
                                            class="input-seperator theme-text-light-color ng-star-inserted"
                                          >
                                            / </span
                                          ><!----><label
                                            class="sr-only ng-star-inserted"
                                            for="customerDateOfBirth_zpfg4mfk91"
                                          >
                                            Data de nascimento Mês </label
                                          ><input
                                            type="tel"
                                            dir="ltr"
                                            autocorrect="off"
                                            autocapitalize="off"
                                            spellcheck="false"
                                            class="form-control theme-text-color standard-gray-border date-input no-sign text-left ng-star-inserted"
                                            id="customerDateOfBirth_zpfg4mfk91"
                                            placeholder="MM"
                                            tabindex="0"
                                            data-qa="input-month"
                                            autocomplete="bday-month"
                                            aria-required="true"
                                            aria-invalid="false"
                                            aria-disabled="false"
                                            aria-errormessage="customerDateOfBirth_error"
                                          /><span
                                            class="input-seperator theme-text-light-color ng-star-inserted"
                                          >
                                            / </span
                                          ><!----><label
                                            class="sr-only ng-star-inserted"
                                            for="customerDateOfBirth_zpfg4mfk92"
                                          >
                                            Data de nascimento Ano </label
                                          ><input
                                            type="tel"
                                            dir="ltr"
                                            autocorrect="off"
                                            autocapitalize="off"
                                            spellcheck="false"
                                            class="form-control theme-text-color standard-gray-border date-input no-sign text-left ng-star-inserted"
                                            id="customerDateOfBirth_zpfg4mfk92"
                                            placeholder="AAAA"
                                            tabindex="0"
                                            data-qa="input-year"
                                            autocomplete="bday-year"
                                            aria-required="true"
                                            aria-invalid="false"
                                            aria-disabled="false"
                                            aria-errormessage="customerDateOfBirth_error"
                                          /><span
                                            class="input-seperator theme-text-light-color ng-star-inserted"
                                            hidden=""
                                          >
                                            / </span
                                          ><!----><!---->
                                        </div>
                                      </div>
                                    </div></ev-forms-date-field
                                  ><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerPostalCode_43hkzwa1s"
                                          ><span>CEP</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerPostalCode"
                                    id="customerPostalCode_43hkzwa1s"
                                    data-qa="input-customerPostalCode"
                                    autocomplete="postal-code"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerPostalCode_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerStreetAndNo_fykr6siew"
                                          ><span>Endereço (Rua/Avenida)</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerStreetAndNo"
                                    id="customerStreetAndNo_fykr6siew"
                                    data-qa="input-customerStreetAndNo"
                                    autocomplete="street-address"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerStreetAndNo_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-6 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerAddressLine2_fcdqtzs9e"
                                          ><span>Número</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerAddressLine2"
                                    id="customerAddressLine2_fcdqtzs9e"
                                    data-qa="input-customerAddressLine2"
                                    autocomplete="address-line2"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerAddressLine2_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerCity_m6mtvy8cs"
                                          ><span>Cidade</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerCity"
                                    id="customerCity_m6mtvy8cs"
                                    data-qa="input-customerCity"
                                    autocomplete="address-level2"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerCity_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerCountry_sk3ynx2fv"
                                          ><span>País</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><!----><!----><!----><!----><ev-forms-select-field
                                    class="ng-tns-c544255543-2 ng-star-inserted"
                                    data-qa="input-customerCountry"
                                    ><div class="styled-select">
                                      <select
                                        class="form-control padding-bottom-m theme-text-color theme-content-bg ng-untouched ng-pristine ng-valid"
                                        name="customerCountry_sk3ynx2fv"
                                        tabindex="0"
                                        id="customerCountry_sk3ynx2fv"
                                        autocomplete="country-name"
                                        data-qa="select-customerCountry"
                                        aria-required="true"
                                        aria-invalid="false"
                                        aria-disabled="false"
                                        aria-errormessage="customerCountry_error"
                                        style="color: inherit"
                                      >
                                        <option
                                          class="theme-content-bg theme-text-color ng-star-inserted"
                                          disabled="disabled"
                                          value="0: null"
                                        >
                                          Por favor, selecione
                                        </option>
                                        <!---->
                                        <optgroup
                                          class="theme-content-bg theme-text-color ng-star-inserted"
                                          label="Países escolhidos com frequência."
                                          aria-hidden="true"
                                        >
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="1: BR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Brasil</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="2: AR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Argentina</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="3: CH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Suíça</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="4: US"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Estados Unidos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="5: DE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Alemanha</span
                                            ><!----><!---->
                                          </option>
                                          <!---->
                                        </optgroup>
                                        <!----><!----><!---->
                                        <optgroup
                                          class="theme-content-bg theme-text-color ng-star-inserted"
                                          label="Mais países."
                                          aria-hidden="true"
                                        >
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="6: AF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Afeganistão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="7: ZA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >África do Sul</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="8: AX"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Åland Islands</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="9: AL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Albânia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="10: DE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Alemanha</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="11: AD"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Andorra</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="12: AO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Angola</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="13: AI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Anguila</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="14: AN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Anitlhas Holandesas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="15: AQ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Antártica</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="16: AG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Antígua e Barbuda</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="17: SA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Arábia Saudita</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="18: DZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Argélia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="19: AR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Argentina</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="20: AM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Armênia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="21: AW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Aruba</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="22: AU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Austrália</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="23: AT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Áustria</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="24: AZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Azerbaijão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="25: BS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bahamas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="26: BH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bahrein</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="27: BD"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bangladesh</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="28: BB"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Barbados</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="29: BE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bélgica</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="30: BZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Belize</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="31: BJ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Benim</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="32: BM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bermudas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="33: BY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bielorrússia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="34: BO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bolívia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="35: BA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bósnia e Herzegovina</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="36: BW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Botsuana</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="37: BR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Brasil</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="38: BN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Brunei Darussalam</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="39: BG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Bulgária</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="40: BF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Burkina Faso</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="41: BI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Burundi</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="42: BT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Butão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="43: CV"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Cabo Verde</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="44: CM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Camarões</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="45: KH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Camboja</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="46: CA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Canadá</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="47: BQ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Caribbean Netherlands</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="48: QA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Catar</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="49: KZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Cazaquistão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="50: TD"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Chade</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="51: CL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Chile</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="52: CN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >China</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="53: CY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Chipre</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="54: CO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Colômbia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="55: KM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Comores</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="56: CG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Congo</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="57: KP"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Coreia do Norte</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="58: KR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Coreia do Sul</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="59: CI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Costa do Marfim</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="60: CR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Costa Rica</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="61: HR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Croácia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="62: CU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Cuba</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="63: CW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Curaçau</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="64: DK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Dinamarca</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="65: DJ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Djibuti</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="66: DM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Dominica</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="67: EG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Egito</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="68: SV"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >El Salvador</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="69: AE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Emirados Árabes Unidos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="70: EC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Equador</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="71: ER"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Eritreia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="72: SK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Eslováquia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="73: SI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Eslovênia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="74: ES"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Espanha</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="75: US"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Estados Unidos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="76: EE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Estônia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="77: ET"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Etiópia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="78: FJ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Fiji</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="79: PH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Filipinas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="80: FI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Finlândia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="81: FR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >França</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="82: GA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Gabão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="83: GM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Gâmbia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="84: GH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Gana</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="85: GE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Geórgia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="86: GI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Gibraltar</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="87: GD"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Granada</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="88: GR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Grécia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="89: GL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Groenlândia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="90: GP"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guadalupe</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="91: GU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guam</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="92: GT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guatemala</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="93: GG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guernsey</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="94: GY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guiana</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="95: GF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guiana Francesa</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="96: GN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guiné</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="97: GW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guiné-Bissau</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="98: GQ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Guiné Equatorial</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="99: HT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Haiti</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="100: NL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Holanda</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="101: HN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Honduras</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="102: HK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Hong Kong</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="103: HU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Hungria</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="104: YE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Iêmen</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="105: JE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Iêmen</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="106: BV"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilha Bouvet</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="107: RE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilha da Reunião</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="108: IM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilha de Man</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="109: CX"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilha do Natal</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="110: HM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilha Heard e Ilhas McDonald</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="111: KY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Cayman</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="112: CC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Cocos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="113: CK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Cook</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="114: FK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Falkland</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="115: FO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Faroe</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="116: GS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Geórgia do Sul e Sanduíche
                                              do Sul</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="117: MP"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Marianas do Norte</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="118: MH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Marshall</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="119: UM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Menores Distantes dos
                                              Estados Unidos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="120: NF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Norfolk</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="121: PN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Pitcairn</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="122: SB"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Salomão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="123: TC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Turcas e Caicos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="124: VI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Virgens Americanas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="125: VG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ilhas Virgens Britânicas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="126: IN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Índia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="127: ID"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Indonésia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="128: IR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Irã</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="129: IQ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Iraque</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="130: IE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Irlanda</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="131: IS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Islândia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="132: IL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Israel</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="133: IT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Itália</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="134: JM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Jamaica</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="135: JP"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Japão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="136: JO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Jordânia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="137: KG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Kiribati</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="138: XK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Kosovo</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="139: KW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Kuwait</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="140: LA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Laos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="141: LS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Lesoto</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="142: LV"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Letônia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="143: LB"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Líbano</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="144: LR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Libéria</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="145: LY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Líbia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="146: LI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Liechtenstein</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="147: LT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Lituânia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="148: LU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Luxemburgo</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="149: MO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Macau</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="150: MK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Macedônia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="151: MG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Madagascar</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="152: MY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Malásia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="153: MW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Malawi</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="154: MV"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Maldivas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="155: ML"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Mali</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="156: MT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Malta</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="157: MA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Marrocos</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="158: MQ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Martinica</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="159: MR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Mauritânia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="160: MU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Mauritius</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="161: YT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Mayotte</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="162: MX"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >México</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="163: FM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Micronésia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="164: MZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Moçambique</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="165: MD"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Moldávia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="166: MC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Mônaco</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="167: MN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Mongólia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="168: ME"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Montenegro</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="169: MS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Montserrat</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="170: MM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Myanmar</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="171: NA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Namíbia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="172: NR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Nauru</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="173: NP"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Nepal</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="174: NI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Nicarágua</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="175: NE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Níger</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="176: NG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Nigéria</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="177: NU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Niue</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="178: NO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Noruega</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="179: NC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Nova Caledônia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="180: NZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Nova Zelândia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="181: OM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Omã</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="182: PW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Palau</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="183: PS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Palestina</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="184: PA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Panamá</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="185: PG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Papua Nova Guiné</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="186: PK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Paquistão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="187: PY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Paraguai</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="188: PE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Perú</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="189: PF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Polinésia Francesa</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="190: PL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Polônia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="191: PR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Porto Rico</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="192: PT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Portugal</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="193: KE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Quênia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="194: KI"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Quirguistão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="195: GB"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Reino Unido</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="196: CF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >República Centro-Africana</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="197: CD"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >República Democrática do
                                              Congo</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="198: DO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >República Dominicana</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="199: CZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >República Tcheca</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="200: RO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Romênia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="201: RW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ruanda</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="202: RU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Rússia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="203: EH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Saara Ocidental</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="204: WS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Samoa</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="205: AS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Samoa Americana</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="206: SM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >San Marino</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="207: SH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Santa Helena</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="208: LC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Santa Lúcia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="209: KN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >São Cristóvão e Nevis</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="210: PM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >São Pedro e Miquelon</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="211: ST"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >São Tomé e Príncipe</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="212: VC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >São Vicente e Granadinas</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="213: SN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Senegal</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="214: SL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Serra Leoa</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="215: RS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Sérvia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="216: SC"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Seychelles</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="217: SG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Singapura</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="218: SX"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Sint Maarten</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="219: SY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Síria</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="220: SO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Somália</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="221: SS"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >South Sudan</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="222: LK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Sri Lanka</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="223: BL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >St. Barthélemy</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="224: MF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >St. Martin</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="225: SZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Suazilândia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="226: SD"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Sudão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="227: SE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Suécia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="228: CH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Suíça</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="229: SR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Suriname</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="230: SJ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Svalbard e Jan Mayen</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="231: TH"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Tailândia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="232: TW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Taiwan</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="233: TJ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Tajiquistão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="234: TZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Tanzânia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="235: IO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Território Britânico do Oceano
                                              Índico</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="236: TF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Territórios Franceses do
                                              Sul</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="237: TL"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Timor-Leste</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="238: TG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Togo</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="239: TO"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Tonga</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="240: TK"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Toquelau</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="241: TT"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Trindade e Tobago</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="242: TN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Tunísia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="243: TM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Turcomenistão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="244: TR"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Turquia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="245: TV"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Tuvalu</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="246: UA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Ucrânia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="247: UG"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Uganda</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="248: UY"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Uruguai</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="249: UZ"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Uzbequistão</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="250: VU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Vanuatu</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="251: VA"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Vaticano</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="252: VE"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Venezuela</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="253: VN"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Vietnã</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="254: WF"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Wallis e Futuna</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="255: YU"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >YU</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="256: ZM"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Zâmbia</span
                                            ><!----><!---->
                                          </option>
                                          <option
                                            class="theme-text-color theme-content-bg ng-star-inserted"
                                            value="257: ZW"
                                            aria-hidden="false"
                                          >
                                            <span class="ng-star-inserted"
                                              >Zimbábue</span
                                            ><!----><!---->
                                          </option>
                                          <!---->
                                        </optgroup>
                                        <!----><!----><!----><!---->
                                      </select>
                                    </div></ev-forms-select-field
                                  ><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerFiscalCode_qlgaipu4s"
                                          ><span>CPF (XXX.XXX.XXX-XX)</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerFiscalCode"
                                    id="customerFiscalCode_qlgaipu4s"
                                    data-qa="input-customerFiscalCode"
                                    autocomplete="off"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerFiscalCode_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerPassportNumber_7mi4p6x1m"
                                          ><span
                                            >CPF ou Número do Passaporte (se
                                            estrangeiro)</span
                                          ><span> (opcional)</span></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><input
                                    type="text"
                                    class="form-control theme-text-color standard-gray-border ng-tns-c544255543-2 optional ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerPassportNumber"
                                    id="customerPassportNumber_7mi4p6x1m"
                                    data-qa="input-customerPassportNumber"
                                    autocomplete="off"
                                    aria-required="false"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerPassportNumber_error"
                                  /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <section
                        data-qa="fields-group"
                        class="ng-tns-c544255543-2 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                        style="opacity: 1; visibility: visible"
                      >
                        <!---->
                        <div class="row form-field-row ng-tns-c544255543-2">
                          <div
                            class="col-xs-12 col-sm-12 ng-star-inserted"
                            style=""
                          >
                            <ev-forms-field class="ng-tns-c544255543-2"
                              ><div class="forms-field">
                                <div
                                  field-label=""
                                  class="ng-tns-c544255543-2 ng-star-inserted"
                                >
                                  <ev-forms-field-label
                                    class="ng-tns-c544255543-2"
                                    ><div>
                                      <div>
                                        <label
                                          data-qa="label"
                                          class="theme-text-variant-color label"
                                          for="customerPhone_vj69llfsy"
                                          ><span>Telefone</span
                                          ><span hidden="">
                                            (opcional)</span
                                          ></label
                                        ><!---->
                                      </div>
                                    </div></ev-forms-field-label
                                  >
                                </div>
                                <!----><!----><!---->
                                <div class="form-group">
                                  <!----><!----><!----><input
                                    type="tel"
                                    dir="ltr"
                                    class="form-control theme-text-color standard-gray-border text-left ng-tns-c544255543-2 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                    tabindex="0"
                                    name="customerPhone"
                                    id="customerPhone_vj69llfsy"
                                    data-qa="input-customerPhone"
                                    autocomplete="tel"
                                    aria-required="true"
                                    aria-invalid="false"
                                    aria-disabled="false"
                                    aria-errormessage="customerPhone_error"
                                  /><!----><!----><!----><!----><!---->
                                </div>
                                <div field-error="">
                                  <ev-forms-field-error
                                    class="ng-tns-c544255543-2"
                                    ><div aria-live="assertive">
                                      <!---->
                                    </div></ev-forms-field-error
                                  >
                                </div>
                                <!---->
                                <div field-notification="">
                                  <ev-forms-notification
                                    class="ng-tns-c544255543-2"
                                    ><!----></ev-forms-notification
                                  >
                                </div>
                              </div></ev-forms-field
                            >
                          </div>
                          <!---->
                        </div>
                      </section>
                      <!----><!---->
                    </div></ev-forms-shocu
                  ><!----><!---->
                  <div class="ng-star-inserted">
                    <ev-forms-shocu
                      class="checkout-form-container ng-tns-c544255543-3 ng-star-inserted"
                      ><div
                        class="validation z-index-flyout ng-tns-c544255543-3 ng-untouched ng-pristine ng-valid"
                        data-qa="dynamic-form-contactData"
                      >
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-3 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-3">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-3"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-3 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-3"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="customerEmail_jga78ylc7"
                                            ><span>E-mail</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><!----><input
                                      type="email"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-3 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                      disabled="disabled"
                                      tabindex="0"
                                      name="customerEmail"
                                      id="customerEmail_jga78ylc7"
                                      data-qa="input-customerEmail"
                                      autocomplete="email"
                                      aria-required="true"
                                      aria-invalid="false"
                                      aria-disabled="true"
                                      aria-errormessage="customerEmail_error"
                                    /><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-3"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <div
                                    field-description=""
                                    class="margin-top-xs ng-tns-c544255543-3 ng-star-inserted"
                                    data-qa="customerEmail_desc"
                                  >
                                    Nós precisamos do seu endereço de e-mail
                                    para enviar a confirmação do seu pedido.
                                    Além disso, seus dados serão utilizados para
                                    o envio de informações importantes sobre o
                                    seu evento. Se necessário, você poderá
                                    alterar seu endereço de e-mail no seu
                                    perfil.
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-3"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-3 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-3">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-3"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-3 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-3"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="customerDateOfBirth_y2kqk7kah"
                                            ><span>Data de nascimento</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><!----><!----><!----><!----><!----><!----><ev-forms-date-field
                                      class="ng-tns-c544255543-3 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                      data-qa="input-customerDateOfBirth"
                                      ><div class="row">
                                        <div class="col-xs-12">
                                          <div class="combined-date-input">
                                            <label
                                              class="sr-only ng-star-inserted"
                                              for="customerDateOfBirth_y2kqk7kah0"
                                            >
                                              Data de nascimento dia </label
                                            ><input
                                              type="tel"
                                              dir="ltr"
                                              autocorrect="off"
                                              autocapitalize="off"
                                              spellcheck="false"
                                              class="form-control theme-text-color standard-gray-border date-input no-sign text-left ng-star-inserted"
                                              id="customerDateOfBirth_y2kqk7kah0"
                                              placeholder="DD"
                                              tabindex="0"
                                              data-qa="input-day"
                                              autocomplete="bday-day"
                                              aria-required="true"
                                              aria-invalid="false"
                                              aria-disabled="false"
                                              aria-errormessage="customerDateOfBirth_error"
                                            /><span
                                              class="input-seperator theme-text-light-color ng-star-inserted"
                                            >
                                              / </span
                                            ><!----><label
                                              class="sr-only ng-star-inserted"
                                              for="customerDateOfBirth_y2kqk7kah1"
                                            >
                                              Data de nascimento Mês </label
                                            ><input
                                              type="tel"
                                              dir="ltr"
                                              autocorrect="off"
                                              autocapitalize="off"
                                              spellcheck="false"
                                              class="form-control theme-text-color standard-gray-border date-input no-sign text-left ng-star-inserted"
                                              id="customerDateOfBirth_y2kqk7kah1"
                                              placeholder="MM"
                                              tabindex="0"
                                              data-qa="input-month"
                                              autocomplete="bday-month"
                                              aria-required="true"
                                              aria-invalid="false"
                                              aria-disabled="false"
                                              aria-errormessage="customerDateOfBirth_error"
                                            /><span
                                              class="input-seperator theme-text-light-color ng-star-inserted"
                                            >
                                              / </span
                                            ><!----><label
                                              class="sr-only ng-star-inserted"
                                              for="customerDateOfBirth_y2kqk7kah2"
                                            >
                                              Data de nascimento Ano </label
                                            ><input
                                              type="tel"
                                              dir="ltr"
                                              autocorrect="off"
                                              autocapitalize="off"
                                              spellcheck="false"
                                              class="form-control theme-text-color standard-gray-border date-input no-sign text-left ng-star-inserted"
                                              id="customerDateOfBirth_y2kqk7kah2"
                                              placeholder="AAAA"
                                              tabindex="0"
                                              data-qa="input-year"
                                              autocomplete="bday-year"
                                              aria-required="true"
                                              aria-invalid="false"
                                              aria-disabled="false"
                                              aria-errormessage="customerDateOfBirth_error"
                                            /><span
                                              class="input-seperator theme-text-light-color ng-star-inserted"
                                              hidden=""
                                            >
                                              / </span
                                            ><!----><!---->
                                          </div>
                                        </div>
                                      </div></ev-forms-date-field
                                    ><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-3"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <div
                                    field-description=""
                                    class="margin-top-xs ng-tns-c544255543-3 ng-star-inserted"
                                    data-qa="customerDateOfBirth_desc"
                                  ></div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-3"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-3 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-3">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-3"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-3 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-3"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="customerCity_u6w9om3vo"
                                            ><span>Cidade</span
                                            ><span> (opcional)</span></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><input
                                      type="text"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-3 optional ng-untouched ng-pristine ng-valid ng-star-inserted"
                                      tabindex="0"
                                      name="customerCity"
                                      id="customerCity_u6w9om3vo"
                                      data-qa="input-customerCity"
                                      autocomplete="address-level2"
                                      aria-required="false"
                                      aria-invalid="false"
                                      aria-disabled="false"
                                      aria-errormessage="customerCity_error"
                                    /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-3"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-3"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-3 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-3">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-3"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-3 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-3"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="customerMobile_0njk8m6er"
                                            ><span
                                              >Telefone (Celular) DDD +
                                              Número</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><!----><!----><!----><ev-forms-phone-number
                                      class="ng-tns-c544255543-3 ng-untouched ng-pristine ng-valid ng-star-inserted"
                                      data-qa="input-customerMobile"
                                      ><div class="row ng-star-inserted">
                                        <div class="col-xs-4 ng-star-inserted">
                                          <label
                                            class="sr-only"
                                            for="country code_nqwu25b4n"
                                          >
                                            Mobile countrycode </label
                                          ><ev-forms-select-field
                                            data-qa="select-country code"
                                            ><div class="styled-select">
                                              <select
                                                class="form-control padding-bottom-m theme-text-color theme-content-bg ng-untouched ng-pristine ng-valid"
                                                name="country code_nqwu25b4n"
                                                tabindex="0"
                                                id="country code_nqwu25b4n"
                                                autocomplete="country"
                                                data-qa="select-country code"
                                                aria-required="true"
                                                aria-invalid="false"
                                                aria-disabled="false"
                                                aria-errormessage="country code_error"
                                                style="color: inherit"
                                              >
                                                <option
                                                  class="theme-content-bg theme-text-color ng-star-inserted"
                                                  disabled="disabled"
                                                  value="0: null"
                                                >
                                                  Por favor, selecione
                                                </option>
                                                <!---->
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="1: BR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BR (+55)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="2: AR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AR (+54)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="3: CH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CH (+41)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="4: US"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >US (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="5: DE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >DE (+49)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="6: AD"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AD (+376)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="7: AE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AE (+971)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="8: AF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AF (+93)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="9: AG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AG (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="10: AI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AI (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="11: AL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AL (+355)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="12: AM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AM (+374)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="13: AN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AN (+599)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="14: AO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AO (+244)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="15: AQ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AQ (+672)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="16: AS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AS (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="17: AT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AT (+43)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="18: AU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AU (+61)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="19: AW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AW (+297)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="20: AZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >AZ (+994)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="21: BA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BA (+387)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="22: BB"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BB (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="23: BD"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BD (+880)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="24: BE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BE (+32)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="25: BF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BF (+226)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="26: BG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BG (+359)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="27: BH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BH (+973)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="28: BI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BI (+257)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="29: BJ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BJ (+229)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="30: BL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BL (+590)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="31: BM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BM (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="32: BN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BN (+673)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="33: BO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BO (+591)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="34: BQ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BQ (+599)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="35: BS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BS (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="36: BT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BT (+975)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="37: BW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BW (+267)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="38: BY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BY (+375)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="39: BZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >BZ (+501)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="40: CA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CA (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="41: CC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CC (+61)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="42: CD"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CD (+242)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="43: CF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CF (+236)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="44: CG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CG (+242)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="45: CI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CI (+225)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="46: CK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CK (+682)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="47: CL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CL (+56)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="48: CM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CM (+237)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="49: CN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CN (+86)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="50: CO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CO (+57)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="51: CR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CR (+506)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="52: CU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CU (+53)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="53: CV"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CV (+238)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="54: CW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CW (+599)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="55: CX"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CX (+61)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="56: CY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CY (+357)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="57: CZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >CZ (+420)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="58: DJ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >DJ (+253)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="59: DK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >DK (+45)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="60: DM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >DM (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="61: DO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >DO (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="62: DZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >DZ (+213)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="63: EC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >EC (+593)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="64: EE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >EE (+372)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="65: EG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >EG (+20)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="66: EH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >EH (+212)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="67: ER"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ER (+291)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="68: ES"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ES (+34)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="69: ET"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ET (+251)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="70: FI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >FI (+358)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="71: FJ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >FJ (+679)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="72: FK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >FK (+500)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="73: FM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >FM (+691)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="74: FO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >FO (+298)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="75: FR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >FR (+33)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="76: GA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GA (+241)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="77: GB"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GB (+44)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="78: GD"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GD (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="79: GE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GE (+995)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="80: GF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GF (+594)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="81: GG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GG (+44)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="82: GH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GH (+233)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="83: GI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GI (+350)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="84: GL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GL (+299)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="85: GM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GM (+220)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="86: GN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GN (+224)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="87: GP"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GP (+590)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="88: GQ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GQ (+240)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="89: GR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GR (+30)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="90: GT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GT (+502)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="91: GU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GU (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="92: GW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GW (+245)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="93: GY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >GY (+592)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="94: HK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >HK (+852)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="95: HM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >HM (+672)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="96: HN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >HN (+504)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="97: HR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >HR (+385)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="98: HT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >HT (+509)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="99: HU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >HU (+36)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="100: ID"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ID (+62)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="101: IE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IE (+353)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="102: IL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IL (+972)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="103: IM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IM (+44)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="104: IN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IN (+91)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="105: IQ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IQ (+964)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="106: IR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IR (+98)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="107: IS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IS (+354)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="108: IT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >IT (+39)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="109: JE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >JE (+44)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="110: JM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >JM (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="111: JO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >JO (+962)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="112: JP"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >JP (+81)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="113: KE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KE (+254)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="114: KG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KG (+996)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="115: KH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KH (+855)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="116: KI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KI (+686)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="117: KM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KM (+269)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="118: KN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KN (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="119: KP"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KP (+850)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="120: KR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KR (+82)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="121: KW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KW (+965)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="122: KY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KY (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="123: KZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >KZ (+7)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="124: LA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LA (+856)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="125: LB"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LB (+961)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="126: LC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LC (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="127: LI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LI (+423)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="128: LK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LK (+94)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="129: LR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LR (+231)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="130: LS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LS (+266)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="131: LT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LT (+370)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="132: LU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LU (+352)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="133: LV"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LV (+371)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="134: LY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >LY (+218)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="135: MA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MA (+212)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="136: MC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MC (+377)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="137: MD"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MD (+373)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="138: ME"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ME (+382)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="139: MF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MF (+590)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="140: MG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MG (+261)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="141: MH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MH (+692)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="142: MK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MK (+389)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="143: ML"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ML (+223)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="144: MM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MM (+95)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="145: MN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MN (+976)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="146: MO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MO (+853)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="147: MP"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MP (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="148: MQ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MQ (+596)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="149: MR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MR (+222)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="150: MS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MS (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="151: MT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MT (+356)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="152: MU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MU (+230)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="153: MV"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MV (+960)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="154: MW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MW (+265)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="155: MX"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MX (+52)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="156: MY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MY (+60)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="157: MZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >MZ (+258)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="158: NA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NA (+264)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="159: NC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NC (+687)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="160: NE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NE (+227)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="161: NF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NF (+672)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="162: NG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NG (+234)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="163: NI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NI (+505)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="164: NL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NL (+31)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="165: NO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NO (+47)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="166: NP"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NP (+977)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="167: NR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NR (+674)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="168: NU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NU (+683)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="169: NZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >NZ (+64)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="170: OM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >OM (+968)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="171: PA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PA (+507)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="172: PE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PE (+51)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="173: PF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PF (+689)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="174: PG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PG (+675)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="175: PH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PH (+63)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="176: PK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PK (+92)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="177: PL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PL (+48)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="178: PM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PM (+508)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="179: PN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PN (+870)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="180: PR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PR (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="181: PS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PS (+970)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="182: PT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PT (+351)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="183: PW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PW (+680)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="184: PY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >PY (+595)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="185: QA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >QA (+974)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="186: RE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >RE (+262)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="187: RO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >RO (+40)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="188: RS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >RS (+381)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="189: RU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >RU (+7)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="190: RW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >RW (+250)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="191: SA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SA (+966)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="192: SB"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SB (+677)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="193: SC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SC (+248)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="194: SD"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SD (+249)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="195: SE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SE (+46)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="196: SG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SG (+65)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="197: SH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SH (+290)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="198: SI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SI (+386)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="199: SJ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SJ (+47)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="200: SK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SK (+421)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="201: SL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SL (+232)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="202: SM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SM (+378)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="203: SN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SN (+221)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="204: SO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SO (+252)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="205: SR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SR (+597)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="206: SS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SS (+211)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="207: ST"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ST (+239)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="208: SV"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SV (+503)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="209: SY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SY (+963)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="210: SZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >SZ (+268)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="211: TC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TC (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="212: TD"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TD (+235)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="213: TF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TF (+262)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="214: TG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TG (+228)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="215: TH"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TH (+66)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="216: TJ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TJ (+992)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="217: TK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TK (+690)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="218: TL"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TL (+670)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="219: TM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TM (+993)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="220: TN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TN (+216)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="221: TO"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TO (+676)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="222: TR"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TR (+90)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="223: TT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TT (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="224: TV"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TV (+688)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="225: TW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TW (+886)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="226: TZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >TZ (+255)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="227: UA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >UA (+380)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="228: UG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >UG (+256)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="229: UY"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >UY (+598)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="230: UZ"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >UZ (+998)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="231: VA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >VA (+39)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="232: VC"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >VC (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="233: VE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >VE (+58)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="234: VG"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >VG (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="235: VI"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >VI (+1)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="236: VN"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >VN (+84)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="237: VU"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >VU (+678)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="238: WF"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >WF (+681)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="239: WS"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >WS (+685)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="240: XK"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >XK (+383)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="241: YE"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >YE (+967)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="242: YT"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >YT (+269)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="243: ZA"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ZA (+27)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="244: ZM"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ZM (+260)</span
                                                  ><!----><!---->
                                                </option>
                                                <option
                                                  data-qa="option-item"
                                                  class="theme-text-color theme-content-bg ng-star-inserted"
                                                  value="245: ZW"
                                                >
                                                  <span class="ng-star-inserted"
                                                    >ZW (+263)</span
                                                  ><!----><!---->
                                                </option>
                                                <!----><!----><!----><!----><!---->
                                              </select>
                                            </div></ev-forms-select-field
                                          >
                                        </div>
                                        <!----><!----><!---->
                                        <div class="col-xs-8 ng-star-inserted">
                                          <label
                                            for="mobileNumber"
                                            class="sr-only"
                                          >
                                            Mobile number </label
                                          ><input
                                            id="mobileNumber"
                                            type="text"
                                            dir="ltr"
                                            class="form-control theme-text-color standard-gray-border no-sign text-left phone-number-input-width ng-untouched ng-pristine ng-valid"
                                            name="local number"
                                            tabindex="0"
                                            autocomplete="tel-national"
                                            aria-required="true"
                                            aria-invalid="false"
                                            aria-disabled="false"
                                            aria-errormessage="customerMobile_error"
                                          />
                                        </div>
                                        <!----><!---->
                                      </div>
                                      <!----></ev-forms-phone-number
                                    ><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-3"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-3"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <!----><!---->
                      </div></ev-forms-shocu
                    ><ev-gdpr-hint><!----><!----><!----><!----></ev-gdpr-hint>
                  </div>
                  <!---->
                  <div class="col-xs-12 card-separator-spacer">
                    <hr aria-hidden="true" class="card-separator" />
                  </div>
                  <!----><!---->
                  <div hidden="" class="ng-star-inserted">
                    <!----><ev-forms-shocu
                      class="checkout-form-container ng-tns-c544255543-4 ng-star-inserted"
                      ><div
                        class="validation z-index-flyout ng-tns-c544255543-4 ng-untouched ng-pristine"
                        data-qa="dynamic-form-deliveryData"
                      >
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-4 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-4">
                            <div
                              class="col-xs-12 col-sm-6 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-4"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-4 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-4"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="deliveryFirstName_ntux1wp9u"
                                            ><span>Nome</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><input
                                      type="text"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-4 ng-untouched ng-pristine ng-star-inserted"
                                      disabled=""
                                      tabindex="0"
                                      name="deliveryFirstName"
                                      id="deliveryFirstName_ntux1wp9u"
                                      data-qa="input-deliveryFirstName"
                                      autocomplete="off"
                                      aria-required="true"
                                      aria-invalid="true"
                                      aria-disabled="false"
                                      aria-errormessage="deliveryFirstName_error"
                                    /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-4"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-4"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <div
                              class="col-xs-12 col-sm-6 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-4"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-4 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-4"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="deliveryLastName_847ugj5c8"
                                            ><span>Sobrenome</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><input
                                      type="text"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-4 ng-untouched ng-pristine ng-star-inserted"
                                      disabled=""
                                      tabindex="0"
                                      name="deliveryLastName"
                                      id="deliveryLastName_847ugj5c8"
                                      data-qa="input-deliveryLastName"
                                      autocomplete="off"
                                      aria-required="true"
                                      aria-invalid="true"
                                      aria-disabled="false"
                                      aria-errormessage="deliveryLastName_error"
                                    /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-4"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-4"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-4 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-4">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-4"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-4 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-4"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="deliveryPostalCode_r0utwxwsl"
                                            ><span>CEP</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><input
                                      type="text"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-4 ng-untouched ng-pristine ng-star-inserted"
                                      disabled=""
                                      tabindex="0"
                                      name="deliveryPostalCode"
                                      id="deliveryPostalCode_r0utwxwsl"
                                      data-qa="input-deliveryPostalCode"
                                      autocomplete="off"
                                      aria-required="true"
                                      aria-invalid="true"
                                      aria-disabled="false"
                                      aria-errormessage="deliveryPostalCode_error"
                                    /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-4"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-4"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-4 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-4">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-4"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-4 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-4"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="deliveryStreetAndNo_kktwz7d9n"
                                            ><span>Endereço (Rua/Avenida)</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><input
                                      type="text"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-4 ng-untouched ng-pristine ng-star-inserted"
                                      disabled=""
                                      tabindex="0"
                                      name="deliveryStreetAndNo"
                                      id="deliveryStreetAndNo_kktwz7d9n"
                                      data-qa="input-deliveryStreetAndNo"
                                      autocomplete="off"
                                      aria-required="true"
                                      aria-invalid="true"
                                      aria-disabled="false"
                                      aria-errormessage="deliveryStreetAndNo_error"
                                    /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-4"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-4"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-4 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-4">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-4"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-4 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-4"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="deliveryAddressLine2_h2v9sysoe"
                                            ><span>Número</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><input
                                      type="text"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-4 ng-untouched ng-pristine ng-star-inserted"
                                      disabled=""
                                      tabindex="0"
                                      name="deliveryAddressLine2"
                                      id="deliveryAddressLine2_h2v9sysoe"
                                      data-qa="input-deliveryAddressLine2"
                                      autocomplete="off"
                                      aria-required="true"
                                      aria-invalid="true"
                                      aria-disabled="false"
                                      aria-errormessage="deliveryAddressLine2_error"
                                    /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-4"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-4"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-4 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-4">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-4"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-4 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-4"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="deliveryCity_32739z8eq"
                                            ><span>Cidade</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><input
                                      type="text"
                                      class="form-control theme-text-color standard-gray-border ng-tns-c544255543-4 ng-untouched ng-pristine ng-star-inserted"
                                      disabled=""
                                      tabindex="0"
                                      name="deliveryCity"
                                      id="deliveryCity_32739z8eq"
                                      data-qa="input-deliveryCity"
                                      autocomplete="off"
                                      aria-required="true"
                                      aria-invalid="true"
                                      aria-disabled="false"
                                      aria-errormessage="deliveryCity_error"
                                    /><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-4"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-4"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <section
                          data-qa="fields-group"
                          class="ng-tns-c544255543-4 ng-trigger ng-trigger-fadeInOut col-xs-12 card-section ng-star-inserted"
                          style="opacity: 1; visibility: visible"
                        >
                          <!---->
                          <div class="row form-field-row ng-tns-c544255543-4">
                            <div
                              class="col-xs-12 col-sm-12 ng-star-inserted"
                              style=""
                            >
                              <ev-forms-field class="ng-tns-c544255543-4"
                                ><div class="forms-field">
                                  <div
                                    field-label=""
                                    class="ng-tns-c544255543-4 ng-star-inserted"
                                  >
                                    <ev-forms-field-label
                                      class="ng-tns-c544255543-4"
                                      ><div>
                                        <div>
                                          <label
                                            data-qa="label"
                                            class="theme-text-variant-color label"
                                            for="deliveryCountry_gh8qkvdhn"
                                            ><span>País</span
                                            ><span hidden="">
                                              (opcional)</span
                                            ></label
                                          ><!---->
                                        </div>
                                      </div></ev-forms-field-label
                                    >
                                  </div>
                                  <!----><!----><!---->
                                  <div class="form-group">
                                    <!----><!----><!----><!----><!----><ev-forms-select-field
                                      class="ng-tns-c544255543-4 ng-star-inserted"
                                      data-qa="input-deliveryCountry"
                                      ><div class="styled-select">
                                        <select
                                          class="form-control padding-bottom-m theme-text-color theme-content-bg ng-untouched ng-pristine"
                                          name="deliveryCountry_gh8qkvdhn"
                                          tabindex="0"
                                          id="deliveryCountry_gh8qkvdhn"
                                          disabled=""
                                          autocomplete="off"
                                          data-qa="select-deliveryCountry"
                                          aria-required="true"
                                          aria-invalid="true"
                                          aria-disabled="false"
                                          aria-errormessage="deliveryCountry_error"
                                        >
                                          <option
                                            class="theme-content-bg theme-text-color ng-star-inserted"
                                            disabled="disabled"
                                            value="0: null"
                                          >
                                            Por favor, selecione
                                          </option>
                                          <!---->
                                          <optgroup
                                            class="theme-content-bg theme-text-color ng-star-inserted"
                                            label="Países escolhidos com frequência."
                                            aria-hidden="true"
                                          >
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="1: BR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Brasil</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="2: AR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Argentina</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="3: CH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Suíça</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="4: US"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Estados Unidos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="5: DE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Alemanha</span
                                              ><!----><!---->
                                            </option>
                                            <!---->
                                          </optgroup>
                                          <!----><!----><!---->
                                          <optgroup
                                            class="theme-content-bg theme-text-color ng-star-inserted"
                                            label="Mais países."
                                            aria-hidden="true"
                                          >
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="6: AF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Afeganistão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="7: ZA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >África do Sul</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="8: AX"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Åland Islands</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="9: AL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Albânia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="10: DE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Alemanha</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="11: AD"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Andorra</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="12: AO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Angola</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="13: AI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Anguila</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="14: AN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Anitlhas Holandesas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="15: AQ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Antártica</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="16: AG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Antígua e Barbuda</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="17: SA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Arábia Saudita</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="18: DZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Argélia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="19: AR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Argentina</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="20: AM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Armênia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="21: AW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Aruba</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="22: AU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Austrália</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="23: AT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Áustria</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="24: AZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Azerbaijão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="25: BS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bahamas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="26: BH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bahrein</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="27: BD"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bangladesh</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="28: BB"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Barbados</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="29: BE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bélgica</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="30: BZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Belize</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="31: BJ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Benim</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="32: BM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bermudas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="33: BY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bielorrússia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="34: BO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bolívia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="35: BA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bósnia e Herzegovina</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="36: BW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Botsuana</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="37: BR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Brasil</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="38: BN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Brunei Darussalam</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="39: BG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Bulgária</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="40: BF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Burkina Faso</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="41: BI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Burundi</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="42: BT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Butão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="43: CV"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Cabo Verde</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="44: CM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Camarões</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="45: KH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Camboja</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="46: CA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Canadá</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="47: BQ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Caribbean Netherlands</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="48: QA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Catar</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="49: KZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Cazaquistão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="50: TD"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Chade</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="51: CL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Chile</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="52: CN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >China</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="53: CY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Chipre</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="54: CO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Colômbia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="55: KM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Comores</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="56: CG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Congo</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="57: KP"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Coreia do Norte</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="58: KR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Coreia do Sul</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="59: CI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Costa do Marfim</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="60: CR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Costa Rica</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="61: HR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Croácia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="62: CU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Cuba</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="63: CW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Curaçau</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="64: DK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Dinamarca</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="65: DJ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Djibuti</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="66: DM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Dominica</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="67: EG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Egito</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="68: SV"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >El Salvador</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="69: AE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Emirados Árabes Unidos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="70: EC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Equador</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="71: ER"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Eritreia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="72: SK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Eslováquia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="73: SI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Eslovênia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="74: ES"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Espanha</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="75: US"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Estados Unidos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="76: EE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Estônia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="77: ET"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Etiópia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="78: FJ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Fiji</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="79: PH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Filipinas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="80: FI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Finlândia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="81: FR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >França</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="82: GA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Gabão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="83: GM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Gâmbia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="84: GH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Gana</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="85: GE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Geórgia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="86: GI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Gibraltar</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="87: GD"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Granada</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="88: GR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Grécia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="89: GL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Groenlândia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="90: GP"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guadalupe</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="91: GU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guam</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="92: GT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guatemala</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="93: GG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guernsey</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="94: GY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guiana</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="95: GF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guiana Francesa</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="96: GN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guiné</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="97: GW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guiné-Bissau</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="98: GQ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Guiné Equatorial</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="99: HT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Haiti</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="100: NL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Holanda</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="101: HN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Honduras</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="102: HK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Hong Kong</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="103: HU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Hungria</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="104: YE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Iêmen</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="105: JE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Iêmen</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="106: BV"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilha Bouvet</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="107: RE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilha da Reunião</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="108: IM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilha de Man</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="109: CX"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilha do Natal</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="110: HM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilha Heard e Ilhas
                                                McDonald</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="111: KY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Cayman</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="112: CC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Cocos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="113: CK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Cook</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="114: FK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Falkland</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="115: FO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Faroe</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="116: GS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Geórgia do Sul e
                                                Sanduíche do Sul</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="117: MP"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Marianas do Norte</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="118: MH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Marshall</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="119: UM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Menores Distantes dos
                                                Estados Unidos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="120: NF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Norfolk</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="121: PN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Pitcairn</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="122: SB"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Salomão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="123: TC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Turcas e Caicos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="124: VI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Virgens Americanas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="125: VG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ilhas Virgens Britânicas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="126: IN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Índia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="127: ID"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Indonésia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="128: IR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Irã</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="129: IQ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Iraque</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="130: IE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Irlanda</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="131: IS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Islândia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="132: IL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Israel</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="133: IT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Itália</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="134: JM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Jamaica</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="135: JP"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Japão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="136: JO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Jordânia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="137: KG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Kiribati</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="138: XK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Kosovo</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="139: KW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Kuwait</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="140: LA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Laos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="141: LS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Lesoto</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="142: LV"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Letônia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="143: LB"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Líbano</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="144: LR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Libéria</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="145: LY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Líbia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="146: LI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Liechtenstein</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="147: LT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Lituânia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="148: LU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Luxemburgo</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="149: MO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Macau</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="150: MK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Macedônia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="151: MG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Madagascar</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="152: MY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Malásia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="153: MW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Malawi</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="154: MV"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Maldivas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="155: ML"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Mali</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="156: MT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Malta</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="157: MA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Marrocos</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="158: MQ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Martinica</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="159: MR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Mauritânia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="160: MU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Mauritius</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="161: YT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Mayotte</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="162: MX"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >México</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="163: FM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Micronésia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="164: MZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Moçambique</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="165: MD"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Moldávia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="166: MC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Mônaco</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="167: MN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Mongólia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="168: ME"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Montenegro</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="169: MS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Montserrat</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="170: MM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Myanmar</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="171: NA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Namíbia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="172: NR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Nauru</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="173: NP"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Nepal</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="174: NI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Nicarágua</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="175: NE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Níger</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="176: NG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Nigéria</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="177: NU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Niue</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="178: NO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Noruega</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="179: NC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Nova Caledônia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="180: NZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Nova Zelândia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="181: OM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Omã</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="182: PW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Palau</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="183: PS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Palestina</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="184: PA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Panamá</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="185: PG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Papua Nova Guiné</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="186: PK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Paquistão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="187: PY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Paraguai</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="188: PE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Perú</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="189: PF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Polinésia Francesa</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="190: PL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Polônia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="191: PR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Porto Rico</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="192: PT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Portugal</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="193: KE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Quênia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="194: KI"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Quirguistão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="195: GB"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Reino Unido</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="196: CF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >República Centro-Africana</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="197: CD"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >República Democrática do
                                                Congo</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="198: DO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >República Dominicana</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="199: CZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >República Tcheca</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="200: RO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Romênia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="201: RW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ruanda</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="202: RU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Rússia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="203: EH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Saara Ocidental</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="204: WS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Samoa</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="205: AS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Samoa Americana</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="206: SM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >San Marino</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="207: SH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Santa Helena</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="208: LC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Santa Lúcia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="209: KN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >São Cristóvão e Nevis</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="210: PM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >São Pedro e Miquelon</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="211: ST"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >São Tomé e Príncipe</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="212: VC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >São Vicente e Granadinas</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="213: SN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Senegal</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="214: SL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Serra Leoa</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="215: RS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Sérvia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="216: SC"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Seychelles</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="217: SG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Singapura</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="218: SX"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Sint Maarten</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="219: SY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Síria</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="220: SO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Somália</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="221: SS"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >South Sudan</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="222: LK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Sri Lanka</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="223: BL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >St. Barthélemy</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="224: MF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >St. Martin</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="225: SZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Suazilândia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="226: SD"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Sudão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="227: SE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Suécia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="228: CH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Suíça</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="229: SR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Suriname</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="230: SJ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Svalbard e Jan Mayen</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="231: TH"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Tailândia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="232: TW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Taiwan</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="233: TJ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Tajiquistão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="234: TZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Tanzânia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="235: IO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Território Britânico do Oceano
                                                Índico</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="236: TF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Territórios Franceses do
                                                Sul</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="237: TL"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Timor-Leste</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="238: TG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Togo</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="239: TO"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Tonga</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="240: TK"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Toquelau</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="241: TT"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Trindade e Tobago</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="242: TN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Tunísia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="243: TM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Turcomenistão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="244: TR"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Turquia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="245: TV"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Tuvalu</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="246: UA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Ucrânia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="247: UG"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Uganda</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="248: UY"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Uruguai</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="249: UZ"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Uzbequistão</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="250: VU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Vanuatu</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="251: VA"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Vaticano</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="252: VE"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Venezuela</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="253: VN"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Vietnã</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="254: WF"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Wallis e Futuna</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="255: YU"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >YU</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="256: ZM"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Zâmbia</span
                                              ><!----><!---->
                                            </option>
                                            <option
                                              class="theme-text-color theme-content-bg ng-star-inserted"
                                              value="257: ZW"
                                              aria-hidden="false"
                                            >
                                              <span class="ng-star-inserted"
                                                >Zimbábue</span
                                              ><!----><!---->
                                            </option>
                                            <!---->
                                          </optgroup>
                                          <!----><!----><!----><!---->
                                        </select>
                                      </div></ev-forms-select-field
                                    ><!----><!----><!---->
                                  </div>
                                  <div field-error="">
                                    <ev-forms-field-error
                                      class="ng-tns-c544255543-4"
                                      ><div aria-live="assertive">
                                        <!---->
                                      </div></ev-forms-field-error
                                    >
                                  </div>
                                  <!---->
                                  <div field-notification="">
                                    <ev-forms-notification
                                      class="ng-tns-c544255543-4"
                                      ><!----></ev-forms-notification
                                    >
                                  </div>
                                </div></ev-forms-field
                              >
                            </div>
                            <!---->
                          </div>
                        </section>
                        <!----><!---->
                      </div></ev-forms-shocu
                    ><ev-gdpr-hint><!----><!----><!----><!----></ev-gdpr-hint>
                  </div>
                  <!---->
                  <div hidden="" class="ng-star-inserted">
                    <div class="col-xs-12 card-separator-spacer">
                      <hr aria-hidden="true" class="card-separator" />
                    </div>
                  </div>
                  <!----><!----><!----><ev-forms-gcps-privacy-preferences
                    class="ng-star-inserted"
                    ><!---->
                    <section
                      data-qa="privacy-preferences"
                      hidden=""
                      class="col-xs-12 card-section ng-star-inserted"
                      evi-widget-initialized="true"
                      data-evi-widget-version="3.19.0"
                    ></section>
                    <!----><!----><!----><!----><!----><!----></ev-forms-gcps-privacy-preferences
                  ><ev-gcps-newsletter class="ng-star-inserted"
                    ><div class="margin-bottom-s">
                      <section class="col-xs-12 card-section ng-star-inserted">
                        <!----><ev-gcps-newsletter-container
                          class="ng-star-inserted"
                          ><!----></ev-gcps-newsletter-container
                        ><ev-gcps-info-mailing-container
                          class="ng-star-inserted"
                          ><div
                            class="ng-star-inserted"
                            evi-widget-initialized="true"
                            data-evi-widget-version="3.19.0"
                          >
                            <div
                              id="evi-widget-rule-11e97ba7-f78b-7fbd-c919-91cd6fc4fdff"
                              class="evi-widget evi-widget-type-checkbox hidden"
                            >
                              <input
                                id="evi-widget-checkbox-11e97ba7-f78b-7fbd-c919-91cd6fc4fdff"
                                class="evi-widget-checkbox"
                                type="checkbox"
                              /><label
                                for="evi-widget-checkbox-11e97ba7-f78b-7fbd-c919-91cd6fc4fdff"
                                class="evi-widget-label"
                              ></label>
                            </div>
                          </div>
                          <!----></ev-gcps-info-mailing-container
                        >
                        <div class="row ng-star-inserted">
                          <div
                            class="col-xs-12 theme-text-light-color checkbox-hint margin-bottom-m data-protection-paragraph font-size-xs"
                          >
                            Você pode alterar suas configurações quando quiser
                            acessando a página Minha EVENTIM. Você também pode
                            recusar o uso do seu e-mail para estes fins a
                            qualquer momento; por exemplo, ao enviar um e-mail
                            para newsletter@eventim.com.br.
                          </div>
                        </div>
                        <!----><!----><!----><!---->
                      </section>
                      <div
                        class="col-xs-12 card-separator-spacer ng-star-inserted"
                      >
                        <hr aria-hidden="true" class="card-separator" />
                      </div>
                      <!----><!---->
                    </div>
                    <!----><!----></ev-gcps-newsletter
                  ><!----><!----><!---->
                </div>
              </form></ev-customer-data
            >
          </div>
        </div>
        <!---->

        <section class="col-xs-12 card-section ng-star-inserted">
          <ev-gdpr-hint
            ><div class="row ng-star-inserted">
              <div data-qa="gdpr" class="col-xs-12">
                <!---->
                <p
                  data-qa="general-hint"
                  class="data-protection-paragraph font-size-xs theme-text-light-color line-height-3xs ng-star-inserted"
                >
                  <ev-forms-formatter
                    ><span class="ng-star-inserted"
                      ><span class="ng-star-inserted"
                        >Uma das nossas prioridades é a segurança dos seus
                        dados. Você pode ler nossa Política de Privacidade </span
                      ><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><ev-forms-modal-link
                        class="ng-star-inserted"
                        ><a
                          data-qa="modal-link"
                          title="aqui"
                          tabindex="0"
                          class="link-variant theme-text-variant-color"
                          >aqui</a
                        ></ev-forms-modal-link
                      ><!----><!----><!----><span class="ng-star-inserted"
                        >.</span
                      ><!----><!----><!----><!----><!----><!----><!----><!----><!----></span
                    ><!----></ev-forms-formatter
                  >
                </p>
                <!----><!---->
              </div>
            </div>
            <!----><!----><!----><!----><!----></ev-gdpr-hint
          >
        </section>
        <div
          aria-live="assertive"
          class="col-xs-12 card-section ng-star-inserted"
        >
          <ev-no-ticket-insurance-allowed-hint
            ><ev-notification data-qa="ticket-insurance"
              ><div class="row margin-top-s" hidden="">
                <div class="col-xs-12">
                  <div
                    data-qa="notification"
                    class="alert alert-warning theme-element-radius"
                  >
                    <span
                      ><span class="font-weight-bold"
                        >O seguro do ingresso</span
                      >
                      não é válido para o método de entrega escolhido. Nós
                      removemos o seguro do ingresso para você.</span
                    >
                  </div>
                </div>
              </div></ev-notification
            ></ev-no-ticket-insurance-allowed-hint
          ><ev-no-gift-wrap-allowed-hint
            ><ev-notification data-qa="gift-wrap"
              ><div class="row margin-top-s" hidden="">
                <div class="col-xs-12">
                  <div
                    data-qa="notification"
                    class="alert alert-warning theme-element-radius"
                  >
                    <span
                      ><span class="font-weight-bold"
                        >Infelizmente, embrulhar para presente não está
                        disponível</span
                      >
                      para o método de entrega selecionado. O embrulho para
                      presente já foi removido.</span
                    >
                  </div>
                </div>
              </div></ev-notification
            ></ev-no-gift-wrap-allowed-hint
          ><ev-notification data-qa="falsy-inputs"
            ><div class="row margin-top-s" hidden="">
              <div class="col-xs-12">
                <div
                  data-qa="notification"
                  class="alert alert-danger theme-element-radius"
                >
                  <span
                    >Informações importantes estão faltando nos campos
                    assinalados em vermelho. Por favor verifique-os
                    novamente.</span
                  >
                </div>
              </div>
            </div></ev-notification
          ><ev-notification data-qa="disable-deviating-delivery-address"
            ><div class="row margin-top-s" hidden="">
              <div class="col-xs-12">
                <div
                  data-qa="notification"
                  class="alert alert-danger theme-element-radius"
                >
                  <span
                    >Por favor verifique seus dados novamente. Para esse tipo de
                    entrega, não é possível inserir um endereço de entrega
                    diferente.</span
                  >
                </div>
              </div>
            </div></ev-notification
          >
        </div>

        <!---->
      </div>
    </div>
  </div>
</div>

 
    `;
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}