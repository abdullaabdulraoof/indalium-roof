import { Injectable } from '@angular/core';
import { company, Product } from '../data/site-data';

@Injectable({ providedIn:'root' })
export class WhatsAppService {
  open(event?: Event, product?: Product, customMessage?: string): void {
    event?.preventDefault();
    if (!company.whatsappNumber) {
      window.alert('WhatsApp contact details will be available soon. Please use the enquiry form.');
      return;
    }
    const message = customMessage ?? (product
      ? `Hello, I am interested in the ${product.name} ${product.category}. Please share the product details and quotation. Thank you.`
      : 'Hello, I would like to know more about your roofing products. Please contact me with more information. Thank you.');
    window.open(`https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
}
