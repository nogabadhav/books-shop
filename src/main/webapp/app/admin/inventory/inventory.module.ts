import { NgModule } from '@angular/core';
import { BooksShopSharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { InventoryComponent } from 'app/admin/inventory/inventory.component';
import { INVENTORY_ROUTE } from 'app/admin/inventory/inventory.route';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  imports: [BooksShopSharedModule, RouterModule.forChild([INVENTORY_ROUTE]), ToastrModule.forRoot()],
  declarations: [InventoryComponent],
  providers: [ToastrService]
})
export class InventoryModule {}
