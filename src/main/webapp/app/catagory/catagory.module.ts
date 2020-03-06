import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatagoryComponent } from 'app/catagory/catagory.component';
import { CATAGORY_ROUTE } from 'app/catagory/catagory.route';
import { BooksShopSharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [BooksShopSharedModule, RouterModule.forChild([CATAGORY_ROUTE])],
  declarations: [CatagoryComponent]
})
export class CatagoryModule {}
