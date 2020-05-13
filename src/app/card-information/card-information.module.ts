import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardInformationRoutingModule } from './card-information-routing.module';
import { CardInformationComponent } from './card-information.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { CardTotalModule } from '../card-total/card-total.module';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';


@NgModule({
  declarations: [
    CardInformationComponent,
    DialogDetailComponent
  ],
  imports: [
    CommonModule,
    CardInformationRoutingModule,
    CardTotalModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatTableModule
  ],
  entryComponents: [
    DialogDetailComponent
  ],
  exports: [
    CardInformationComponent
  ]
})
export class CardInformationModule { }
