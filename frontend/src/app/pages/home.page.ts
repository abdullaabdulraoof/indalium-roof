import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { applications, categories, company, qualityHighlights, sampleTestimonials, serviceHighlights } from '../data/site-data';
import { WhatsAppService } from '../services/whatsapp.service';

@Component({ selector:'app-home-page', standalone:true, imports:[RouterLink], template:`
<section class="hero">
  <div class="hero-image" role="img" aria-label="Roofer working with a drill on a rooftop"></div>
  <div class="hero-wash"></div>
  <div class="hero-content page-width">
    <span class="eyebrow">Roofing solutions for modern construction</span>
    <h1>Premium roofing sheets<br><span>built for strength &amp; style.</span></h1>
    <p>Reliable roofing and cladding solutions designed for residential, commercial and industrial applications.</p>
    <div class="hero-actions"><a class="button button-blue" routerLink="/products">Explore products <span>↗</span></a><a class="button button-outline hero-quote" routerLink="/contact">Contact us</a><a class="hero-chat" href="" (click)="whatsapp.open($event)">WhatsApp us <span>↗</span></a></div>
    <div class="hero-trust"><span>Product variety</span><span>Finishes for every project</span><span>Personal project support</span></div>
  </div>
  <div class="hero-caption"><span>BUILT FOR THE ELEMENTS</span><span>01 / ROOFING SYSTEMS</span></div>
</section>

<section class="section about-section"><div class="page-width about-grid">
  <div class="about-copy"><span class="eyebrow">About our company</span><h2>Roofing that puts material and method first.</h2><p>We provide roofing and cladding solutions designed to meet the practical and aesthetic requirements of modern construction. Our product range brings together multiple profiles, attractive finishes and practical installation options for residential, commercial and industrial projects.</p><p>From the forming process to product selection, we make it easier to get clear information for your requirements.</p><div class="about-actions"><a class="button button-blue" routerLink="/about">Learn more <span>↗</span></a><a class="text-link" routerLink="/contact">Ask about our products <span>↗</span></a></div></div>
  <div class="about-visual"><img src="/images/roll-forming-machine.webp" alt="Roll-forming machine used to produce metal roofing sheets" loading="lazy"><div class="about-stamp"><strong>Form.</strong><strong>Fit.</strong><strong>Finish.</strong><small>ROOFING &amp; CLADDING</small></div><div class="about-index">01 <span>ROOF SHEET PRODUCTION</span></div></div>
</div></section>

<section class="section roofing-services"><div class="page-width"><div class="service-intro"><div class="section-heading"><span class="eyebrow">From factory to roofline</span><h2>Roofing services built around the work.</h2><p>Explore the production process, product options and application guidance for your next build.</p></div><a class="text-link" routerLink="/services">See how we can help <span>↗</span></a></div><div class="service-grid">@for (service of services; track service.title) {<article class="service-card"><img [src]="service.image" [alt]="service.imageAlt" loading="lazy"><div class="service-overlay"></div><div class="service-card-copy"><span>{{ service.title }}</span><p>{{ service.description }}</p></div><span class="service-arrow" aria-hidden="true">↗</span></article>}</div></div></section>

<section class="section category-section"><div class="page-width"><div class="section-heading centered"><span class="eyebrow">Find your profile</span><h2>Explore our products</h2><p>Start with a product category, then tell us what your project needs.</p></div><div class="category-grid">@for (category of categories; track $index) {<a class="category-card" routerLink="/products"><div class="category-image"><img [src]="category.image" [alt]="category.title + ' category'" loading="lazy"></div><div class="category-copy"><span>0{{ $index + 1 }}</span><h3>{{ category.title }}</h3><p>{{ category.description }}</p><b>View products <span>↗</span></b></div></a>}</div><div class="section-bottom-link"><a class="button button-outline" routerLink="/products">View all products <span>↗</span></a></div></div></section>

<section class="quality-band"><div class="page-width quality-inner"><div class="section-heading"><span class="eyebrow">Considered in every detail</span><h2>Quality that starts with the right questions.</h2><p>We focus on useful product guidance and clear information, so you can choose with confidence.</p><a class="text-link" routerLink="/services">Explore our services <span>↗</span></a></div><div class="quality-list">@for (item of qualityHighlights; track item.mark) {<article><span>{{ item.mark }}</span><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div><span class="quality-plus">+</span></article>}</div></div></section>

<section class="section choose-section"><div class="page-width"><div class="section-heading"><span class="eyebrow">A straightforward process</span><h2>Why choose us</h2><p>Thoughtful product choices, useful guidance and responsive communication at every step.</p></div><div class="reason-grid">@for (reason of reasons; track reason.title) {<article><span class="reason-mark">{{ reason.mark }}</span><h3>{{ reason.title }}</h3><p>{{ reason.text }}</p></article>}</div></div></section>

<section class="application-section"><div class="page-width"><div class="application-top"><div class="section-heading"><span class="eyebrow">Solutions for every setting</span><h2>Built around your application.</h2></div><a class="text-link" routerLink="/products">Browse products <span>↗</span></a></div><div class="application-grid">@for (app of applications; track app.title) {<a class="application-card" routerLink="/products" [style.background-image]="backgroundFor(app.image)" [attr.aria-label]="app.title + ': ' + app.description"><span>{{ app.title }}</span><span class="app-arrow">↗</span><small>{{ app.description }}</small></a>}</div></div></section>

<section class="project-band"><div class="page-width"><div class="project-intro"><div><span class="eyebrow">Roofing in practice</span><h2>From production line to finished roof.</h2></div><div><p>Take a closer look at roofing manufacture and installation. These are representative photographs, not named company projects.</p><a class="project-link" routerLink="/projects">Explore project gallery <span>↗</span></a></div></div><div class="project-mosaic">@for (story of projectStories; track story.title) {<article class="project-story"><img [src]="story.image" [alt]="story.alt" loading="lazy"><div><span>{{ story.category }}</span><h3>{{ story.title }}</h3><small>Representative image</small></div></article>}</div></div></section>

<section class="stats-section"><div class="page-width stats-inner"><div class="stats-intro"><span class="eyebrow">Company at a glance</span><h2>Growing with every project.</h2><p>Sample figures for layout preview only. Replace with verified Indalium numbers before publishing.</p></div><div class="stats-grid">@for (stat of company.stats; track stat.label) {<div><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>}</div></div></section>

<section class="section testimonial-section"><div class="page-width"><div class="section-heading centered"><span class="eyebrow">Customer stories</span><h2>What our clients say</h2><p class="testimonial-disclaimer">Sample testimonial copy for layout preview only. Replace with approved customer feedback before publishing.</p></div><div class="testimonial-grid">@for (testimonial of testimonials; track testimonial.context) {<article class="testimonial-card"><span class="testimonial-quote-mark" aria-hidden="true">“</span><blockquote>{{ testimonial.quote }}</blockquote><span class="testimonial-context">{{ testimonial.context }}</span><span class="testimonial-sample-label">Sample copy</span></article>}</div></div></section>

<section class="section contact-strip"><div class="page-width contact-inner"><div><span class="eyebrow">Get in touch</span><h2>Here when you need us.</h2><p>Reach out for product information, project guidance or a quotation.</p></div><div class="contact-method"><span>PHONE</span><strong>{{ company.phone }}</strong></div><div class="contact-method"><span>EMAIL</span><strong>{{ company.email }}</strong></div><a class="button button-blue" routerLink="/contact">Contact our team <span>↗</span></a></div></section>
` })
export class HomePage {
  readonly categories = categories;
  readonly applications = applications;
  readonly qualityHighlights = qualityHighlights;
  readonly services = serviceHighlights;
  readonly company = company;
  readonly testimonials = sampleTestimonials;
  readonly whatsapp: WhatsAppService;
  readonly reasons = [
    {mark:'01',title:'Wide product range',text:'Roofing and cladding products for different project requirements.'},
    {mark:'02',title:'Quality-focused manufacturing',text:'A focus on consistent product quality and finishing.'},
    {mark:'03',title:'Profiles & finishes',text:'Different profiles and appearance options to explore.'},
    {mark:'04',title:'Project support',text:'Support in selecting suitable solutions for your project.'},
    {mark:'05',title:'Clear communication',text:'Straightforward communication from enquiry to product selection.'},
    {mark:'06',title:'Customer-focused service',text:'A simple process for enquiries, quotations and product information.'}
  ];
  readonly projectStories = [
    { title:'Metal sheet forming', category:'MANUFACTURING', image:'/images/roll-forming-machine.webp', alt:'Roll-forming machinery shaping metal roofing sheets in a factory.' },
    { title:'Roof installation', category:'ON SITE', image:'/images/roof-installation.webp', alt:'Workers installing a roof on a new building.' },
    { title:'Roofer at work', category:'CRAFT', image:'/images/roof-installer.webp', alt:'Roofer using a drill while working on a rooftop.' }
  ];
  constructor(whatsapp: WhatsAppService) { this.whatsapp = whatsapp; }
  backgroundFor(image: string): string { return `linear-gradient(0deg,rgba(11,27,45,.83),rgba(11,27,45,.06)),url("${image}")`; }
}
