"use client";

import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState<null | "events" | "cities">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerHTML = `
<header data-c="searchheader" class="searchheader notPrinted  " data-qa="sh-comp">

<div class="container">
<div class="searchheader-container js-shopping-cart-flyout js-flyout-scope">
<div class="searchheader-content u-flex u-flex-v-center">

<div class="searchheader-logo" data-qa="header-logo">
<a href="/" class="u-flex">
<img class="searchheader-logo-image" height="50" src="https://www.eventim.com.br/obj/media/BR-eventim/specialLogos/checkoutApp/logo.svg" alt="Ingressos" title="Ingressos">
</a>
</div>









<nav class="searchheader-nav">
<ul class="u-flex">
<li>
<button class="searchheader-nav-item u-no-btn-style link-transparent hidden-xs hidden-sm js-flyout-trigger" data-qa="sh-cat-btn" data-target="#menu-category-items" id="categories" aria-expanded="false" aria-controls="navi">
<span class="searchheader-nav-text">Todos os eventos</span>
<span class="icon icon-expand-more" aria-hidden="true"></span>
</button>


</li>
<li>
<button class="searchheader-nav-item u-no-btn-style link-transparent hidden-xs hidden-sm js-flyout-trigger" data-qa="sh-city-btn" data-target="#menu-city-items" aria-expanded="false" aria-controls="navi">
<span class="searchheader-nav-text">Todas as cidades</span>
<span class="icon icon-expand-more" aria-hidden="true"></span>
</button><section data-c="searchheader" id="navi" class="header-menu js-flyout-header animate-navigation" data-qa="nav-menu" data-is-navigation="true" style="display: none; transform-origin: 237.969px top 0px; opacity: 0; height: auto;">
<div class="menu-arrow js-flyout-arrow" style="left: 217.969px;"></div>
<div class="searchheader">
<div class="container menu-head u-flex-row-reverse">
<div class="menu-head-close u-flex u-flex-v-center searchheader-action-link">
<i class="icon icon-cross js-flyout-close" data-qa="nav-menu-close" tabindex="0" role="button">
<span class="sr-only">Close menu</span>
</i>
</div>
<div class="menu-head-content">
<ul class="u-flex u-flex-justify-start u-flex-v-center">
<li class="searchheader-action-link searchheader-action-lang js-language-native-select" data-qa="lang-sel-mob-native">
<select id="language-selection" data-qa="language-selection" class="language-selection u-unstyled-select u-cursor-pointer theme-text-color">
<option class="theme-text-color theme-content-bg" disabled="" selected="" aria-current="page" value="pt" data-url="/event/black-pantera-no-circo-voador-circo-voador-20486822/">
Português
</option>
<option class="theme-text-color theme-content-bg" value="en" data-url="/en/event/black-pantera-no-circo-voador-circo-voador-20486822/">
English
</option>
<option class="theme-text-color theme-content-bg" value="es" data-url="/es/event/black-pantera-no-circo-voador-circo-voador-20486822/">
Español
</option>
</select>
<label for="language-selection" aria-label="language selection">
<i class="icon icon-header-world language-selection-icon" aria-hidden="true"></i>
</label>
</li>

</ul>
</div>
</div>
</div>
<div class="js-tab-wrapper">
<div class="menu-select js-tab-switch-group" role="tablist">
<div class="menu-select-item js-tab-switch js-tracking js-track theme-text-color" data-target="#menu-category-items" data-qa="nav-cat-btn" data-tracking-category="navigation" data-tracking-action="header_navigation" data-tracking-label="Todos os eventos" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os eventos&quot;}" tabindex="0" role="tab" aria-controls="menu-category-items" aria-selected="false">
<span>Todos os eventos</span>
</div>
<div class="menu-select-item js-tab-switch js-tracking js-track theme-text-color active js-flyout-active" data-target="#menu-city-items" data-qa="nav-city-btn" data-tracking-category="navigation" data-tracking-action="header_navigation" data-tracking-label="Todas as cidades" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;&quot;, &quot;navigation_element_selected&quot;:&quot;Todas as cidades&quot;}" tabindex="0" role="tab" aria-controls="menu-city-items" aria-selected="true">
<span>Todas as cidades</span>
</div>
</div>
<div class="menu-wrapper tab-group js-tab-group">
<div id="menu-category-items" data-tracking-category="navigation" data-tracking-action="flyout_category" class="menu-list tab js-tab menu-category-items js-track-general" role="tabpanel" style="display: none;">
<ul aria-label="Todos os eventos">
<li class="menu-list-li theme-switch-border">
<div data-href="/events/shows-internacionais-156/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Shows Internacionais" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Shows Internacionais&quot;}" role="button" tabindex="0" aria-controls="navi-sub-cat-1" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-cat-156">
Shows Internacionais
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-cat-1" class="menu-sub animate-navigation js-nav-sub" aria-label="Shows Internacionais" style="display: none;">
<li class="menu-sub-item">
<a href="/events/shows-internacionais-156/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-all" data-tracking-label="Visão geral Shows Internacionais" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Visão geral Shows Internacionais&quot;}">
<span class="custom-select-truncat">Visão geral Shows Internacionais</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-internacionais-156/k-pop-1984/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1984" data-tracking-label="K-Pop" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;K-Pop&quot;}">
<span class="custom-select-truncat">K-Pop</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-internacionais-156/pop-internacional-2020/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2020" data-tracking-label="Pop Internacional" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Pop Internacional&quot;}">
<span class="custom-select-truncat">Pop Internacional</span>
&nbsp;<span class="menu-sub-item-numbers">(6)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-internacionais-156/rock-internacional-2021/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2021" data-tracking-label="Rock Internacional" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Rock Internacional&quot;}">
<span class="custom-select-truncat">Rock Internacional</span>
&nbsp;<span class="menu-sub-item-numbers">(21)</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/events/shows-nacionais-175/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Shows Nacionais" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Shows Nacionais&quot;}" role="button" tabindex="0" aria-controls="navi-sub-cat-2" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-cat-175">
Shows Nacionais
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-cat-2" class="menu-sub animate-navigation js-nav-sub" aria-label="Shows Nacionais" style="display: none;">
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-all" data-tracking-label="Visão geral Shows Nacionais" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Visão geral Shows Nacionais&quot;}">
<span class="custom-select-truncat">Visão geral Shows Nacionais</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/carnaval-2393/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2393" data-tracking-label="Carnaval" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Carnaval&quot;}">
<span class="custom-select-truncat">Carnaval</span>
&nbsp;<span class="menu-sub-item-numbers">(1)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/eletronica-dance-1500/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1500" data-tracking-label="Eletrônica &amp; Dance" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Eletrônica &amp; Dance&quot;}">
<span class="custom-select-truncat">Eletrônica &amp; Dance</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/festivais-de-musica-1603/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1603" data-tracking-label="Festivais de Música" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Festivais de Música&quot;}">
<span class="custom-select-truncat">Festivais de Música</span>
&nbsp;<span class="menu-sub-item-numbers">(2)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/funk-nacional-2392/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2392" data-tracking-label="Funk Nacional" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Funk Nacional&quot;}">
<span class="custom-select-truncat">Funk Nacional</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/hard-rock-metal-1502/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1502" data-tracking-label="Hard Rock &amp; Metal" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Hard Rock &amp; Metal&quot;}">
<span class="custom-select-truncat">Hard Rock &amp; Metal</span>
&nbsp;<span class="menu-sub-item-numbers">(15)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/hip-hop-trap-rap-1497/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1497" data-tracking-label="Hip-Hop, Trap &amp; Rap" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Hip-Hop, Trap &amp; Rap&quot;}">
<span class="custom-select-truncat">Hip-Hop, Trap &amp; Rap</span>
&nbsp;<span class="menu-sub-item-numbers">(15)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/mpb-1595/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1595" data-tracking-label="MPB" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;MPB&quot;}">
<span class="custom-select-truncat">MPB</span>
&nbsp;<span class="menu-sub-item-numbers">(133)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/musica-classica-instrumental-1519/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1519" data-tracking-label="Música Clássica &amp; Instrumental" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Música Clássica &amp; Instrumental&quot;}">
<span class="custom-select-truncat">Música Clássica &amp; Instrumental</span>
&nbsp;<span class="menu-sub-item-numbers">(18)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/outros-shows-2015/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2015" data-tracking-label="Outros Shows" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Outros Shows&quot;}">
<span class="custom-select-truncat">Outros Shows</span>
&nbsp;<span class="menu-sub-item-numbers">(3)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/pop-nacional-1495/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1495" data-tracking-label="Pop Nacional" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Pop Nacional&quot;}">
<span class="custom-select-truncat">Pop Nacional</span>
&nbsp;<span class="menu-sub-item-numbers">(7)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/samba-pagode-1597/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1597" data-tracking-label="Samba &amp; Pagode" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Samba &amp; Pagode&quot;}">
<span class="custom-select-truncat">Samba &amp; Pagode</span>
&nbsp;<span class="menu-sub-item-numbers">(14)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/sertanejo-1598/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1598" data-tracking-label="Sertanejo" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Sertanejo&quot;}">
<span class="custom-select-truncat">Sertanejo</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/tributos-homenagens-1982/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1982" data-tracking-label="Tributos &amp; Homenagens" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Tributos &amp; Homenagens&quot;}">
<span class="custom-select-truncat">Tributos &amp; Homenagens</span>
&nbsp;<span class="menu-sub-item-numbers">(69)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/rock-nacional-1499/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1499" data-tracking-label="Rock Nacional" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Rock Nacional&quot;}">
<span class="custom-select-truncat">Rock Nacional</span>
&nbsp;<span class="menu-sub-item-numbers">(21)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/forro-axe-1596/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1596" data-tracking-label="Forró &amp; Axé" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Forró &amp; Axé&quot;}">
<span class="custom-select-truncat">Forró &amp; Axé</span>
&nbsp;<span class="menu-sub-item-numbers">(2)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/gospel-religiosa-1968/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1968" data-tracking-label="Gospel &amp; Religiosa" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Gospel &amp; Religiosa&quot;}">
<span class="custom-select-truncat">Gospel &amp; Religiosa</span>
&nbsp;<span class="menu-sub-item-numbers">(1)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/jazz-rb-soul-blues-1498/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1498" data-tracking-label="Jazz, R&amp;B, Soul &amp; Blues" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Jazz, R&amp;B, Soul &amp; Blues&quot;}">
<span class="custom-select-truncat">Jazz, R&amp;B, Soul &amp; Blues</span>
&nbsp;<span class="menu-sub-item-numbers">(46)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/shows-nacionais-175/reggae-1966/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1966" data-tracking-label="Reggae" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Reggae&quot;}">
<span class="custom-select-truncat">Reggae</span>
&nbsp;<span class="menu-sub-item-numbers">(7)</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/events/espetaculos-teatro-comedia-176/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Espetáculos, Teatro &amp; Comédia" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Espetáculos, Teatro &amp; Comédia&quot;}" role="button" tabindex="0" aria-controls="navi-sub-cat-3" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-cat-176">
Espetáculos, Teatro &amp; Comédia
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-cat-3" class="menu-sub animate-navigation js-nav-sub" aria-label="Espetáculos, Teatro &amp; Comédia" style="display: none;">
<li class="menu-sub-item">
<a href="/events/espetaculos-teatro-comedia-176/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-all" data-tracking-label="Visão geral Espetáculos, Teatro &amp; Comédia" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Visão geral Espetáculos, Teatro &amp; Comédia&quot;}">
<span class="custom-select-truncat">Visão geral Espetáculos, Teatro &amp; Comédia</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/espetaculos-teatro-comedia-176/bale-danca-1521/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1521" data-tracking-label="Balé &amp; Dança" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Balé &amp; Dança&quot;}">
<span class="custom-select-truncat">Balé &amp; Dança</span>
&nbsp;<span class="menu-sub-item-numbers">(9)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/espetaculos-teatro-comedia-176/comedia-stand-up-1508/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1508" data-tracking-label="Comédia &amp; Stand-Up" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Comédia &amp; Stand-Up&quot;}">
<span class="custom-select-truncat">Comédia &amp; Stand-Up</span>
&nbsp;<span class="menu-sub-item-numbers">(23)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/espetaculos-teatro-comedia-176/musicais-1506/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1506" data-tracking-label="Musicais" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Musicais&quot;}">
<span class="custom-select-truncat">Musicais</span>
&nbsp;<span class="menu-sub-item-numbers">(3)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/espetaculos-teatro-comedia-176/palestras-cursos-1600/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1600" data-tracking-label="Palestras &amp; Cursos" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Palestras &amp; Cursos&quot;}">
<span class="custom-select-truncat">Palestras &amp; Cursos</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/espetaculos-teatro-comedia-176/teatro-1507/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1507" data-tracking-label="Teatro" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Teatro&quot;}">
<span class="custom-select-truncat">Teatro</span>
&nbsp;<span class="menu-sub-item-numbers">(96)</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/events/infantil-familia-121/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Infantil &amp; Família" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Infantil &amp; Família&quot;}" role="button" tabindex="0" aria-controls="navi-sub-cat-4" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-cat-121">
Infantil &amp; Família
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-cat-4" class="menu-sub animate-navigation js-nav-sub" aria-label="Infantil &amp; Família" style="display: none;">
<li class="menu-sub-item">
<a href="/events/infantil-familia-121/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-all" data-tracking-label="Visão geral Infantil &amp; Família" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Visão geral Infantil &amp; Família&quot;}">
<span class="custom-select-truncat">Visão geral Infantil &amp; Família</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/infantil-familia-121/infantil-familia-1954/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1954" data-tracking-label="Infantil &amp; Família" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Infantil &amp; Família&quot;}">
<span class="custom-select-truncat">Infantil &amp; Família</span>
&nbsp;<span class="menu-sub-item-numbers">(3)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/infantil-familia-121/outros-eventos-infantis-2016/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2016" data-tracking-label="Outros Eventos Infantis" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Outros Eventos Infantis&quot;}">
<span class="custom-select-truncat">Outros Eventos Infantis</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/infantil-familia-121/shows-musicais-infantis-1977/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1977" data-tracking-label="Shows &amp; Musicais Infantis" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Shows &amp; Musicais Infantis&quot;}">
<span class="custom-select-truncat">Shows &amp; Musicais Infantis</span>
&nbsp;<span class="menu-sub-item-numbers">(1)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/infantil-familia-121/teatro-infantil-1971/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1971" data-tracking-label="Teatro Infantil" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Teatro Infantil&quot;}">
<span class="custom-select-truncat">Teatro Infantil</span>
&nbsp;<span class="menu-sub-item-numbers">(1)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/infantil-familia-121/circo-1970/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1970" data-tracking-label="Circo" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Circo&quot;}">
<span class="custom-select-truncat">Circo</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/infantil-familia-121/festivais-gastronomicos-1510/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1510" data-tracking-label="Festivais Gastronômicos" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Festivais Gastronômicos&quot;}">
<span class="custom-select-truncat">Festivais Gastronômicos</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/events/esportes-123/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Esportes" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Esportes&quot;}" role="button" tabindex="0" aria-controls="navi-sub-cat-5" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-cat-123">
Esportes
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-cat-5" class="menu-sub animate-navigation js-nav-sub" aria-label="Esportes" style="display: none;">
<li class="menu-sub-item">
<a href="/events/esportes-123/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-all" data-tracking-label="Visão geral Esportes" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Visão geral Esportes&quot;}">
<span class="custom-select-truncat">Visão geral Esportes</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/esportes-123/basquete-1514/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1514" data-tracking-label="Basquete" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Basquete&quot;}">
<span class="custom-select-truncat">Basquete</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/esportes-123/eventos-esportivos-1517/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1517" data-tracking-label="Eventos Esportivos" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos Esportivos&quot;}">
<span class="custom-select-truncat">Eventos Esportivos</span>
&nbsp;<span class="menu-sub-item-numbers">(2)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/esportes-123/voleibol-1518/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1518" data-tracking-label="Voleibol" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Voleibol&quot;}">
<span class="custom-select-truncat">Voleibol</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/esportes-123/tenis-1515/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1515" data-tracking-label="Tênis" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Tênis&quot;}">
<span class="custom-select-truncat">Tênis</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/events/lazer-passeios-turismo-178/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Lazer, Passeios &amp; Turismo" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Lazer, Passeios &amp; Turismo&quot;}" role="button" tabindex="0" aria-controls="navi-sub-cat-6" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-cat-178">
Lazer, Passeios &amp; Turismo
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-cat-6" class="menu-sub animate-navigation js-nav-sub" aria-label="Lazer, Passeios &amp; Turismo" style="display: none;">
<li class="menu-sub-item">
<a href="/events/lazer-passeios-turismo-178/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-all" data-tracking-label="Visão geral Lazer, Passeios &amp; Turismo" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Visão geral Lazer, Passeios &amp; Turismo&quot;}">
<span class="custom-select-truncat">Visão geral Lazer, Passeios &amp; Turismo</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/lazer-passeios-turismo-178/cinema-1780/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1780" data-tracking-label="Cinema" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Cinema&quot;}">
<span class="custom-select-truncat">Cinema</span>
&nbsp;<span class="menu-sub-item-numbers">(40)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/lazer-passeios-turismo-178/geek-games-2433/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2433" data-tracking-label="Geek &amp; Games" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Geek &amp; Games&quot;}">
<span class="custom-select-truncat">Geek &amp; Games</span>
&nbsp;<span class="menu-sub-item-numbers">(0)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/lazer-passeios-turismo-178/museus-passeios-exposicoes-1511/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-1511" data-tracking-label="Museus, Passeios &amp; Exposições" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Museus, Passeios &amp; Exposições&quot;}">
<span class="custom-select-truncat">Museus, Passeios &amp; Exposições</span>
&nbsp;<span class="menu-sub-item-numbers">(1)</span>
</a>
</li>
<li class="menu-sub-item">
<a href="/events/lazer-passeios-turismo-178/outras-atracoes-2018/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-2018" data-tracking-label="Outras Atrações" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Outras Atrações&quot;}">
<span class="custom-select-truncat">Outras Atrações</span>
&nbsp;<span class="menu-sub-item-numbers">(11)</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/events/rodeios-280/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Rodeios" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Rodeios&quot;}" role="button" tabindex="0" aria-controls="navi-sub-cat-7" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-cat-280">
Rodeios
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-cat-7" class="menu-sub animate-navigation js-nav-sub" aria-label="Rodeios" style="display: none;">
<li class="menu-sub-item">
<a href="/events/rodeios-280/" class="menu-link theme-text-color js-track-specific js-track" data-qa="nav-cat-sub-all" data-tracking-label="Visão geral Rodeios" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_category&quot;, &quot;navigation_element_selected&quot;:&quot;Visão geral Rodeios&quot;}">
<span class="custom-select-truncat">Visão geral Rodeios</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li js-nav-sub-hide">
<a href="/categories/" class="display-block u-no-link-style" title="Todos os eventos">
<div class="menu-list-item theme-text-color js-track-specific" data-tracking-label="Todos os eventos">
<span class="menu-list-item-label custom-select-truncat" data-qa="nav-category-overview">Todos os eventos</span>
</div>
</a>
</li>
</ul>
</div>
<div id="menu-city-items" data-tracking-category="navigation" data-tracking-action="flyout_city" class="menu-list tab js-tab menu-city-items js-track-general active" role="tabpanel" style="">
<ul aria-label="Todas as cidades">
<li class="menu-list-li theme-switch-border">
<div data-href="/city/belo-horizonte-1139/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Belo Horizonte" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Belo Horizonte&quot;}" role="button" tabindex="0" aria-controls="navi-sub-city-1" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-city-1139">
Belo Horizonte
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-city-1" class="menu-sub animate-navigation js-nav-sub" aria-label="Belo Horizonte" style="display: none;">
<li class="menu-sub-item">
<a data-href="/city/belo-horizonte-1139/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-all" data-tracking-label="Eventos em Belo Horizonte" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos em Belo Horizonte&quot;}">
<span class="custom-select-truncat">Eventos em Belo Horizonte</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/belo-horizonte-1139/venues/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-" data-tracking-label="Todos os locais em Belo Horizonte" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os locais em Belo Horizonte&quot;}">
<span class="custom-select-truncat">Todos os locais em Belo Horizonte</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/city/brasilia-1142/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Brasília" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Brasília&quot;}" role="button" tabindex="0" aria-controls="navi-sub-city-2" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-city-1142">
Brasília
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-city-2" class="menu-sub animate-navigation js-nav-sub" aria-label="Brasília" style="display: none;">
<li class="menu-sub-item">
<a data-href="/city/brasilia-1142/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-all" data-tracking-label="Eventos em Brasília" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos em Brasília&quot;}">
<span class="custom-select-truncat">Eventos em Brasília</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/brasilia-1142/venues/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-" data-tracking-label="Todos os locais em Brasília" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os locais em Brasília&quot;}">
<span class="custom-select-truncat">Todos os locais em Brasília</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/city/curitiba-1796/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Curitiba" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Curitiba&quot;}" role="button" tabindex="0" aria-controls="navi-sub-city-3" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-city-1796">
Curitiba
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-city-3" class="menu-sub animate-navigation js-nav-sub" aria-label="Curitiba" style="display: none;">
<li class="menu-sub-item">
<a data-href="/city/curitiba-1796/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-all" data-tracking-label="Eventos em Curitiba" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos em Curitiba&quot;}">
<span class="custom-select-truncat">Eventos em Curitiba</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/curitiba-1796/venues/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-" data-tracking-label="Todos os locais em Curitiba" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os locais em Curitiba&quot;}">
<span class="custom-select-truncat">Todos os locais em Curitiba</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/city/recife-1141/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Recife" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Recife&quot;}" role="button" tabindex="0" aria-controls="navi-sub-city-4" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-city-1141">
Recife
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-city-4" class="menu-sub animate-navigation js-nav-sub" aria-label="Recife" style="display: none;">
<li class="menu-sub-item">
<a data-href="/city/recife-1141/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-all" data-tracking-label="Eventos em Recife" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos em Recife&quot;}">
<span class="custom-select-truncat">Eventos em Recife</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/olinda-1141/venue/classic-hall-21752/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-21752" data-tracking-label="Classic Hall" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Classic Hall&quot;}">
<span class="custom-select-truncat">Classic Hall</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/recife-1141/venues/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-" data-tracking-label="Todos os locais em Recife" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os locais em Recife&quot;}">
<span class="custom-select-truncat">Todos os locais em Recife</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/city/rio-de-janeiro-1672/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Rio de Janeiro" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Rio de Janeiro&quot;}" role="button" tabindex="0" aria-controls="navi-sub-city-5" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-city-1672">
Rio de Janeiro
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-city-5" class="menu-sub animate-navigation js-nav-sub" aria-label="Rio de Janeiro" style="display: none;">
<li class="menu-sub-item">
<a data-href="/city/rio-de-janeiro-1672/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-all" data-tracking-label="Eventos em Rio de Janeiro" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos em Rio de Janeiro&quot;}">
<span class="custom-select-truncat">Eventos em Rio de Janeiro</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/rio-de-janeiro-1672/venues/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-" data-tracking-label="Todos os locais em Rio de Janeiro" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os locais em Rio de Janeiro&quot;}">
<span class="custom-select-truncat">Todos os locais em Rio de Janeiro</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/city/salvador-1143/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="Salvador" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Salvador&quot;}" role="button" tabindex="0" aria-controls="navi-sub-city-6" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-city-1143">
Salvador
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-city-6" class="menu-sub animate-navigation js-nav-sub" aria-label="Salvador" style="display: none;">
<li class="menu-sub-item">
<a data-href="/city/salvador-1143/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-all" data-tracking-label="Eventos em Salvador" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos em Salvador&quot;}">
<span class="custom-select-truncat">Eventos em Salvador</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/salvador-1143/venues/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-" data-tracking-label="Todos os locais em Salvador" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os locais em Salvador&quot;}">
<span class="custom-select-truncat">Todos os locais em Salvador</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li theme-switch-border">
<div data-href="/city/sao-paulo-943/" class="display-block u-no-link-style js-track js-nav-sub-trigger" data-tracking-label="São Paulo" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;São Paulo&quot;}" role="button" tabindex="0" aria-controls="navi-sub-city-7" aria-expanded="false">
<div class="menu-list-item theme-text-color">
<span class="menu-list-item-label custom-select-truncat u-flex u-flex-justify-start" data-qa="nav-city-943">
São Paulo
</span>
<i class="menu-list-item-icon icon icon-expand-more" aria-hidden="true"></i>
</div>
</div>
<ul id="navi-sub-city-7" class="menu-sub animate-navigation js-nav-sub" aria-label="São Paulo" style="display: none;">
<li class="menu-sub-item">
<a data-href="/city/sao-paulo-943/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-all" data-tracking-label="Eventos em São Paulo" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Eventos em São Paulo&quot;}">
<span class="custom-select-truncat">Eventos em São Paulo</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/sao-paulo-943/venue/allianz-parque-21755/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-21755" data-tracking-label="Allianz Parque" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Allianz Parque&quot;}">
<span class="custom-select-truncat">Allianz Parque</span>
</a>
</li>
<li class="menu-sub-item">
<a data-href="/city/sao-paulo-943/venues/" role="link" tabindex="0" class="menu-link theme-text-color js-track js-track-specific js-open-link" data-qa="nav-city-sub-" data-tracking-label="Todos os locais em São Paulo" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;flyout_city&quot;, &quot;navigation_element_selected&quot;:&quot;Todos os locais em São Paulo&quot;}">
<span class="custom-select-truncat">Todos os locais em São Paulo</span>
</a>
</li>
</ul>
</li>
<li class="menu-list-li js-nav-sub-hide">
<a href="/cities/" class="display-block u-no-link-style" title="Cidades">
<div class="menu-list-item theme-text-color js-track-specific" data-tracking-label="Cidades">
<span class="menu-list-item-label custom-select-truncat" data-qa="nav-city-overview">Cidades</span>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
</section>
</li>
</ul>
</nav>
</div>


<script type="module" src="/staticsite/search-widgets/suggest-widget/3.23.1/suggest-widget.esm.js"></script><div class="searchheader-content searchheader-search">
<suggest-widget class="hydrated" version="3.23.1"><div class="suggest-backdrop"></div><searchterm-input class="hydrated"><form id="headerSearchform" action="/search/" method="get" novalidate="novalidate" data-suggest-close=""><div class="form-group"><input type="hidden" name="affiliate" value="BR1"><div class="input-group input-group-inline-submit"><label for="searchterm" class="sr-only">Buscar artistas e eventos</label><input class="form-control-new form-control search-input search-term form-control-non-transparent theme-text-color theme-content-bg valid placeholder-shown" type="search" name="searchterm" id="searchterm" minlength="2" maxlength="100" data-qa="searchtext-input" required="" autocorrect="off" autocapitalize="off" spellcheck="true" autocomplete="off" aria-invalid="false" role="combobox" aria-autocomplete="list" aria-controls="suggest-list" aria-haspopup="listbox" aria-expanded="false" placeholder="Buscar artistas e eventos"><div class="btn-reset" role="button" tabindex="0" aria-label="Clear text"><i class="icon icon-cross font-size-s btn-reset-theme theme-link-color theme-link-color-hover"></i></div><div style="border-radius: 0 !important;" class="btn input-group-addon btn-search-initial theme-content-bg theme-button-radius"><i class="icon addon-icon icon-loupe"></i></div><div class="btn input-group-addon btn-search-filled btn-primary theme-interaction-btn-bg theme-btn-font-color theme-btn-font-color-hover theme-interaction-border theme-button-radius"><i class="icon addon-icon icon-loupe"></i></div></div></div></form></searchterm-input><suggest-flyout class="autosuggest-container autosuggest-always-visible hydrated"><!----><flyout-content class="hidden hydrated"></flyout-content></suggest-flyout></suggest-widget>
</div>
<script>
(function () {
var widget = document.querySelector('suggest-widget');
widget.config = {"domain":"https://www.eventim.com.br","apiClientId":"web__eventim-com-br","apiPath":"https://public-api.eventim.com/websearch/search/api/exploration/v1","dateFormat":"dd/MM/yyyy","timeFormat":"HH:mm","formAction":"/search/","searchTermName":"searchterm","linkGeneratorMode":false,"sportsMode":false,"searchResultTypes":["Eventseries","Events","Artists","Venues"],"artistFallbackImage":"","locationFallbackImage":"","eventFallbackImage":"","categoryFallbackImage":"","customization":{"favoritesMode":0,"combinedListing":true,"initialViewCategories":[],"showInitialView":false,"detailedProductViewThreshold":3,"detailedAttractionViewThreshold":2},"requestParameters":{"language":"pt","retailPartner":"BR1"},"defaultSortOption":"RELEVANCE","consentCookieID":"__cmpcpcxea504b1b3cac","consentCategory":"2","labeledMessages":{"component.searchheader.autosuggest.noresults":"Desculpe, nenhum resultado foi encontrado para","component.searchheader.autosuggest.widget.searchresults2":"resultados","component.searchheader.autosuggest.showAllResults":"Exibir mais eventos","component.searchresult.facets.eventserie":"Eventos","component.searchresult.facets.venuegroup":"Locais","component.searchheader.autosuggest.widget.searchresults":"resultados","component.searchheader.autosuggest.widget.trendingsearches":"Mais buscados hoje","component.searchheader.autosuggest.initialViewHint":"We’ll show results as soon as you enter a few more characters.","component.calendar.monday":"Seg","component.searchheader.autosuggest.widget.eventsamount":"eventos","component.calendar.saturday":"Sab","sports.medal.icon.tooltip":"Medal session","component.linkevent.button":"Comprar ingressos","component.calendar.tuesday":"Ter","component.searchheader.autosuggest.goto":"Garanta que todas as palavras fora escritas corretamente, tente palavras genéricas ou diferentes.","sports.gender.icon.tooltip.menwomen":"Men/Women","component.searchresult.listing.ctaButtonGroup":"Show [all] {0}","component.calendar.sunday":"Dom","global.iconText.clearText":"Clear text","component.header.search.input.placeholder":"Buscar artistas e eventos","component.searchresult.service":"Help Center","sports.gender.icon.tooltip.female":"Female","component.calendar.friday":"Sex","component.searchheader.autosuggest.widget.searchresult":"resultado","component.linkevent.forwardTextPart1":"O seu evento aparecerá em uma nova janela no próximo","component.linkevent.forwardTextPart2":"segundos.","component.linkevent.forwardTextPart3":"Se esta janela não abrir, clique em \"Comprar Ingressos\"","component.calendar.wednesday":"Qua","component.searchheader.autosuggest.widget.eventsamount2":"eventos","component.calendar.thursday":"Qui","component.searchheader.autosuggest.widget.eventamount":"evento","sports.gender.icon.tooltip.male":"Male","component.searchheader.autosuggest.widget.bestresults":"List of the best results","sports.gender.icon.tooltip.mixed":"Mixed","component.linkevent.headline":"Você será redirecionado...","component.searchresult.facets.artist":"Artistas","component.searchheader.autosuggest.initialViewHint.headline":"Start typing to see suggestions","component.searchheader.autosuggest.searchLabel":"Search","component.searchheader.autosuggest.widget.browsecategories":"Explorar categorias"},"autosuggestRequestsEnabled":true,"venueAdressFormat":"<#ORT>","sportsPlatformStyles":""};
})();
</script>

<div class="searchheader-content searchheader-action ">
<ul class="u-flex u-flex-justify-end u-flex-v-center" role="presentation">





<li class="u-position-relative">
<button class="searchheader-action-link searchheader-action-lang u-no-btn-style js-language-select js-flyout-language-trigger" data-qa="lang-sel" aria-expanded="false" aria-controls="lang" aria-label="language selection">
<i class="icon icon-header-world link-transparent" aria-hidden="true"></i>
</button>
<div class="flyout-container js-flyout-header dynamic no-margin-top" id="lang" data-qa="fly-lang-sel" data-dynamic-position="true" data-trigger=".js-language-select" style="display: none;">
<div class="flyout-arrow js-flyout-arrow"></div>
<div class="flyout-element" data-qa="fly-lang-list">
<ul class="flyout-radio-list js-language-switch searchheader-language-switch simple-list" aria-label="Language switch">
<li class="searchheader-language-switch-item">
<button class="u-no-btn-style fullwidth text-left styled-checkbox theme-switch-bg theme-switch-border js-language-switch-item" disabled="" aria-current="page" type="button" data-qa="lang-pt" data-language="pt" data-url="/event/black-pantera-no-circo-voador-circo-voador-20486822/">
<span class="radio-input" data-checked=""></span>
<span class="label font-size-m searchheader-language-switch-label">Português</span>
</button>
</li>
<li class="searchheader-language-switch-item">
<button class="u-no-btn-style fullwidth text-left styled-checkbox theme-switch-bg theme-switch-border js-language-switch-item" type="button" data-qa="lang-en" data-language="en" data-url="/en/event/black-pantera-no-circo-voador-circo-voador-20486822/">
<span class="radio-input"></span>
<span class="label font-size-m searchheader-language-switch-label">English</span>
</button>
</li>
<li class="searchheader-language-switch-item">
<button class="u-no-btn-style fullwidth text-left styled-checkbox theme-switch-bg theme-switch-border js-language-switch-item" type="button" data-qa="lang-es" data-language="es" data-url="/es/event/black-pantera-no-circo-voador-circo-voador-20486822/">
<span class="radio-input"></span>
<span class="label font-size-m searchheader-language-switch-label">Español</span>
</button>
</li>
</ul>
</div>
</div>
</li>





<li class="searchheader-action-link" data-qa="favorites-icon">
<a class="u-no-link-style js-tracking js-track" href="/myfavorites/artists/" title="Meus favoritos" data-tracking-category="navigation" data-tracking-action="header_navigation" data-tracking-label="Meus favoritos" data-track-name="navigation" data-track-params="{&quot;navigation_category&quot;:&quot;header&quot;, &quot;navigation_subcategory&quot;:&quot;&quot;, &quot;navigation_element_selected&quot;:&quot;Meus favoritos&quot;}">
<i class="icon icon-follow-outline link-transparent" aria-hidden="true"></i>
</a>
</li>







<li class="u-position-relative">

<a class="searchheader-action-link searchheader-action-login u-no-link-style" data-qa="acc-sel" href="/dashboard/" aria-label="Minha Conta" title="Minha Conta">
<i class="icon icon-header-account link-transparent js-login-icon" aria-hidden="true"></i>

</a>
<script type="application/configuration">
{
"configCustomerId": "0",
"messages": {
"greeting": "Hello"
}
}
</script>
</li>

<li class="hidden-md hidden-lg" data-qa="acc-sel-mob">
<a class="link display-block" href="/dashboard/" aria-label="Minha Conta" title="Minha Conta">
<div class="header-svg" aria-hidden="true">
<svg fill="#fff" width="34" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41421" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
<path d="m0 11.714c0 .158.128.286.286.286.157 0 .285-.128.285-.286 0-2.993 2.436-5.428 5.429-5.428s5.429 2.435 5.429 5.428c0 .158.128.286.285.286.158 0 .286-.128.286-.286 0-2.793-1.921-5.14-4.51-5.805.983-.532 1.653-1.572 1.653-2.766 0-1.733-1.41-3.143-3.143-3.143s-3.143 1.41-3.143 3.143c0 1.194.67 2.234 1.653 2.766-2.589.665-4.51 3.012-4.51 5.805zm3.429-8.571c0-1.418 1.153-2.572 2.571-2.572s2.571 1.154 2.571 2.572-1.153 2.571-2.571 2.571-2.571-1.153-2.571-2.571z"></path>
</svg>
</div>
</a>
</li>





<li class="searchheader-action-cart js-shopping-cart-trigger" data-qa="cart-select" tabindex="0" role="button" style="display: none;">
<div class="link js-checkout-link" data-href="/?doc=cart">
<div class="header-svg link-transparent js-cart-icon">
<svg fill="#fff" width="34" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41421" viewBox="0 0 273 217" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="m41.531 0c2.398 0 4.56 1.456 5.471 3.696l18.298 44.452h201.693c1.942 0 3.759.975 4.872 2.587 1.121 1.763 1.331 3.758.677 5.55l-35.596 96.295c-.865 2.348-3.088 3.9-5.556 3.9h-129.694c-2.398 0-5.388-1.456-6.316-3.696l-39.514-96.296v-.033l-18.286-44.416h-31.645c-3.276 0-5.935-2.696-5.935-6.019 0-3.324 2.659-6.02 5.935-6.02h35.596zm185.742 144.443 31.153-84.258h-188.179l34.565 84.258z"></path>
<path d="m142.393 192.591c0 13.276-10.642 24.076-23.732 24.076-13.087 0-23.73-10.8-23.73-24.076 0-13.275 10.643-24.072 23.73-24.072 13.031 0 23.637 10.701 23.732 24.072zm-35.597 0c0 6.647 5.315 12.037 11.865 12.037s11.867-5.39 11.867-12.037c0-6.644-5.317-12.035-11.867-12.035s-11.865 5.391-11.865 12.035z"></path>
<path d="m237.324 192.591c0 13.276-10.646 24.076-23.732 24.076-13.087 0-23.733-10.8-23.733-24.076 0-13.275 10.646-24.072 23.733-24.072 13.028 0 23.637 10.701 23.732 24.072zm-35.596 0c0 6.647 5.314 12.037 11.864 12.037s11.863-5.39 11.863-12.037c0-6.644-5.313-12.035-11.863-12.035s-11.864 5.391-11.864 12.035z"></path>
</g>
</svg>
<span class="sr-only">To shopping cart</span>
</div>
<div class="js-ticket-amount-circle ticket-amount-circle theme-interaction-bg theme-interaction-color">
<div class="ticket-amount-container">
<span class="ticket-amount js-ticket-amount" data-qa="ticket-amount"></span>
</div>
</div>
</div>
</li>
<div class="flyout-container shopping-cart-flyout js-shopping-cart-container theme-text-highlight-color" style="display: none;">
</div>
</ul>
</div>

<button class="searchheader-burger-menu u-no-btn-style u-flex u-flex-v-center js-flyout-trigger" data-qa="burger-btn" data-tooltip-content=".flyout-container" aria-label="Open menu" aria-expanded="false">
<div class="header-svg" aria-hidden="true">
<svg fill="#fff" width="26" height="24" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41421" viewBox="0 0 42 33" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="m0 2.062c0-1.138.957-2.062 2.083-2.062h37.833c1.152 0 2.084.916 2.084 2.062 0 1.14-.957 2.064-2.084 2.064h-37.833c-1.151 0-2.083-.916-2.083-2.064z"></path>
<path d="m0 16.5c0-1.139.957-2.063 2.083-2.063h37.833c1.152 0 2.084.916 2.084 2.063 0 1.139-.957 2.063-2.084 2.063h-37.833c-1.151 0-2.083-.916-2.083-2.063z"></path>
<path d="m0 30.938c0-1.14.957-2.062 2.083-2.062h37.833c1.152 0 2.084.914 2.084 2.062 0 1.139-.957 2.062-2.084 2.062h-37.833c-1.151 0-2.083-.915-2.083-2.062z"></path>
</g>
</svg>
</div>
</button>
</div>
</div>
</header>
`;
  return (
    <div dangerouslySetInnerHTML={{ __html: headerHTML }} />

  );
}
