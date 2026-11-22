import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../data/site-data';
import { WhatsAppService } from '../services/whatsapp.service';

@Component({
  selector:'app-product-card',
  standalone:true,
  imports:[RouterLink],
  template:`<article class="product-card"><a class="product-image" [routerLink]="['/products',product.slug]"><img [src]="product.image" [alt]="product.imageAlt" loading="lazy"><span class="image-index">0{{ index + 1 }}</span><span class="image-note">Illustrative image</span></a><div class="product-card-body"><span class="product-category">{{ product.category }}</span><h3><a [routerLink]="['/products',product.slug]">{{ product.name }}</a></h3><p>{{ product.description }}</p><div class="card-actions"><a class="text-link" [routerLink]="['/products',product.slug]">View details <span>↗</span></a><a class="card-quote" href="" (click)="whatsapp.open($event,product)" [attr.aria-label]="'Get a quote for ' + product.name">Get quote <span>↗</span></a></div></div></article>`
})
export class ProductCardComponent {
  @Input({required:true}) product!: Product;
  @Input() index = 0;
  constructor(readonly whatsapp: WhatsAppService) {}
}