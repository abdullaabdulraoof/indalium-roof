import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { ProductsPage } from './pages/products.page';
import { ProductDetailPage } from './pages/product-detail.page';
import { InfoPage } from './pages/info.page';
import { NotFoundPage } from './pages/not-found.page';

export const routes: Routes = [
	{ path:'', component:HomePage, title:'Roofing Sheets & Roofing Solutions | Indalium', data:{title:'Roofing Sheets & Roofing Solutions | Indalium',description:'Explore quality roofing sheets, sandwich panels, cladding solutions and roofing products for residential, commercial and industrial projects.'} },
	{ path:'about', component:InfoPage, data:{kind:'about',eyebrow:'About us',title:'About Us',intro:'A range of practical roofing and cladding products for modern construction.',description:'Learn about our roofing and cladding solutions for modern construction.'} },
	{ path:'products', component:ProductsPage, data:{title:'Roofing Products | Indalium',description:'Browse sandwich roof panels, sandwich cladding panels, tile profile sheets and trapezoidal roofing sheets.'} },
	{ path:'products/:slug', component:ProductDetailPage },
	{ path:'services', component:InfoPage, data:{kind:'services',eyebrow:'How we help',title:'Services',intro:'Product guidance and project support to help you take the next step.',description:'Explore product selection, project enquiry and roofing support services.'} },
	{ path:'projects', component:InfoPage, data:{kind:'projects',eyebrow:'Selected work',title:'Our Projects',intro:'Project examples and case studies will appear here when approved company material is available.',description:'Explore roofing and cladding project examples.'} },
	{ path:'contact', component:InfoPage, data:{kind:'contact',eyebrow:'Get in touch',title:'Contact',intro:'Talk to us about product information, project support or a quotation.',description:'Contact us about roofing sheets, sandwich panels and cladding solutions.'} },
	{ path:'**', component:NotFoundPage, data:{title:'Page Not Found | Indalium',description:'The requested page could not be found.'} }
];
