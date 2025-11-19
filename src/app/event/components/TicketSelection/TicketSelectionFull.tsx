"use client";

import { Accordion } from "../Acorddion";
import { MoreInfo } from "../MoreInfo";
import { PText } from "../P";
import TicketSelector from "./TicketSelector";



export default function TicketSelectionFull() {


    return (
        <section data-c="ticketselectionbox2" className="container margin-top-xxl">

            <div className="js-ticket-type-tab-wrapper">
                <div className="js-tab-list-group theme-element-radius js-capacity-control">
                    <div className="seat-select-wrapper js-seat-select-wrapper" data-qa="seatSelectWrapper">
                        <div className="event-list js-tab-list active" id="tickets">

                            <div className="js-tab-group">
                                <div className="bestseat-only active js-tab" id="tickets-bestseat-tab">

                                    <div className="event-list u-position-relative js-focus js-capacity-control">
                                        <div className="js-cat-check">

                                            {/* ----------- COMPONENTE DA LISTA DE TICKETS ----------- */}
                                            <TicketSelector />
                                            <PText />
                                            <Accordion />
                                            <MoreInfo />

                                            {/* ----------- FIM DO COMPONENTE ----------- */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
