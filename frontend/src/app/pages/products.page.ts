import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { products } from '../data/site-data';
import { WhatsAppService } from '../services/whatsapp.service';
import { ProductCardComponent } from '../components/product-card.component';

@Component({ selector:'app-products-page', standalone:true, imports:[RouterLink,ProductCardComponent], template:`
<section class="page-hero"><div class="page-width"><div class="breadcrumb"><a routerLink="/">Home</a><span>/</span><span>Products</span></div><span class="eyebrow">Product range</span><h1>Roofing, shaped around your project.</h1><p>Browse profiles and panel systems for a range of building requirements. Product specifications are available on request.</p></div></section>
<section class="section"><div class="page-width"><div class="filter-row" aria-label="Filter products by category"><span>Filter by</span>@for (filter of filters; track filter.key) {<button type="button" [class.selected]="activeFilter === filter.key" (click)="setFilter(filter.key)">{{ filter.label }}</button>}</div>
<div class="product-grid">@for (product of visibleProducts; track product.slug; let index = $index) {<app-product-card [product]="product" [index]="index" />} @empty {<div class="empty-note">No products in this category.</div>}</div>
</div></section>`, styles:[`.filter-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:28px}.filter-row>span{margin-right:6px;color:#6c7885;font-size:.8rem;font-weight:700}.filter-row button{min-height:39px;padding:0 14px;border:1px solid #d5dde3;border-radius:3px;background:white;color:#516071;font-size:.78rem;cursor:pointer}.filter-row button:hover,.filter-row button.selected{border-color:var(--blue);background:var(--blue);color:white}`] })
export class ProductsPage {
  readonly filters = [{key:'all',label:'All products'},{key:'sandwich',label:'Sandwich panels'},{key:'roofing',label:'Roofing sheets'},{key:'cladding',label:'Cladding'},{key:'profile',label:'Profile sheets'}];
  readonly allProducts = products;
  activeFilter = 'all';
  constructor(readonly whatsapp: WhatsAppService) {}
  get visibleProducts() { return this.activeFilter === 'all' ? this.allProducts : this.allProducts.filter((product) => product.categoryKey === this.activeFilter); }
  setFilter(key: string): void { this.activeFilter = key; }
}
