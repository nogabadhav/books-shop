import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BooksShopSharedModule } from 'app/shared/shared.module';
import { BooksShopCoreModule } from 'app/core/core.module';
import { BooksShopAppRoutingModule } from './app-routing.module';
import { BooksShopHomeModule } from './home/home.module';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [BrowserModule, BooksShopSharedModule, BooksShopCoreModule, BooksShopHomeModule, BooksShopAppRoutingModule],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class BooksShopAppModule {}