import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { TableComponent } from './table/table.component';
import { BotComponent } from './bot/bot.component';

@NgModule({
  declarations: [
    BotComponent,
    FiltersComponent,
    NavbarComponent,
    TableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotComponent,
    FiltersComponent,
    NavbarComponent,
    TableComponent
  ]
})
export class SharedModule { }
