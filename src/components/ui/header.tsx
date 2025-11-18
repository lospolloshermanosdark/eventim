"use client";

import Script from "next/script";

export default function F1Header() {
    const html = `
    <div id="cmpwrapper" class="cmpwrapper"></div>
   
 
    <div id="cmpwrapper" class="cmpwrapper"></div>

    <div id="place-ad-top" class="center text-center"></div>
    <div id="place-ad-top" class="center text-center"></div>
<header>
  <div class="brand header-container">
    <div class="container">
      <div class="row">
        <div class="col col-xs-24">
          <div class="navbar-header">
            <a
              href="https://www.eventim.com.br/"
              target="_blank"
              class="navbar-brand"
              rel="noopener"
              ><img
                src="https://www.eventim.com.br/campaign/fileadmin/fm_br/ev-logos/eventim-logo-wh-gld.svg"
                width="116"
                height="34"
                class="headerlogo"
                alt="Logo" /></a
            ><span class="claim"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


`;
  return (
    <>
     
      <div dangerouslySetInnerHTML={{ __html: html }}>
        
      </div>
    </>
  );
}
