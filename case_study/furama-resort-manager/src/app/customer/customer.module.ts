import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerUpdateComponent} from './customer-update/customer-update.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';


@NgModule({
  declarations: [CustomerListComponent, CustomerCreateComponent, CustomerUpdateComponent, CustomerDeleteComponent],
  exports: [
    CustomerListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule {
}
