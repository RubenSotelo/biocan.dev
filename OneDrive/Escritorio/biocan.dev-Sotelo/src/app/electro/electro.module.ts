import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectroPageRoutingModule } from './electro-routing.module';

import { ElectroPage } from './electro.page';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectroPageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [ElectroPage]
})
export class ElectroPageModule {}
