import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { WhatsAppService } from './services/whatsapp.service';
import { products } from './data/site-data';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.html',
  styleUrl: './app.css'
})
export class App {
  readonly whatsapp: WhatsAppService = inject(WhatsAppService);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  menuOpen = false;

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let route = this.router.routerState.root;
      while (route.firstChild) route = route.firstChild;
      const pageTitle = route.snapshot.data['title'] as string | undefined;
      const description = route.snapshot.data['description'] as string | undefined;
      const product = products.find((item) => item.slug === route.snapshot.paramMap.get('slug'));
      this.title.setTitle(product ? `${product.name} ${product.category} | Indalium` : pageTitle ?? 'Roofing Sheets & Roofing Solutions | Indalium');
      this.meta.updateTag({ name: 'description', content: product?.description ?? description ?? 'Explore roofing sheets, sandwich panels, cladding solutions and roofing products for projects in Kerala.' });
      const canonical = new URL(this.router.url, environment.canonicalOrigin).toString();
      this.document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonical);
      this.meta.updateTag({ property: 'og:url', content: canonical });
    });
  }

  toggleMenu(): void { this.menuOpen = !this.menuOpen; }
  closeMenu(): void { this.menuOpen = false; }
}
