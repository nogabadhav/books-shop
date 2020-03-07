import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BooksShopSharedModule } from 'app/shared/shared.module';
import { BooksShopCoreModule } from 'app/core/core.module';
import { BooksShopAppRoutingModule } from './app-routing.module';
import { BooksShopHomeModule } from './home/home.module';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';
import { BasketModule } from 'app/basket/basket.module';

@NgModule({
  imports: [BrowserModule, BooksShopSharedModule, BooksShopCoreModule, BooksShopHomeModule, BooksShopAppRoutingModule, BasketModule],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent],
  bootstrap: [MainComponent]
})
export class BooksShopAppModule {}
