import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({ selector:'app-not-found-page', standalone:true, imports:[RouterLink], template:`<section class="not-found"><div class="page-width"><span class="eyebrow">404 · Page not found</span><h1>That page isn't on this roof.</h1><p>The address may have changed, or the page may no longer be available.</p><a class="button button-blue" routerLink="/">Return home <span>↗</span></a></div></section>`, styles:[`.not-found{min-height:62vh;display:flex;align-items:center;padding:70px 0;background:linear-gradient(135deg,#eff4f6,#fff)}.not-found h1{max-width:700px;margin:17px 0;font-size:clamp(2.7rem,5vw,4.4rem)}.not-found p{max-width:520px;margin-bottom:25px}`] })
export class NotFoundPage {}
