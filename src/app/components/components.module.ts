import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './contracts/contracts.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContractsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContractsComponent
  ]
})
export class ComponentsModule { }
