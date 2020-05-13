import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTotalComponent } from '../card-total/card-total.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CardTotalComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CardTotalComponent
  ]
})
export class CardTotalModule { }
