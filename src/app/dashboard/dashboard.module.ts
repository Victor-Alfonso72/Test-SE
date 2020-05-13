import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { CardInformationModule } from '../card-information/card-information.module';
import { CardTotalModule } from '../card-total/card-total.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardInformationModule,
    CardTotalModule,

    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class DashboardModule { }
