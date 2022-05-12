import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SensoresPageRoutingModule } from './sensores-routing.module';

import { SensoresPage } from './sensores.page';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SensoresPageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [SensoresPage]
})
export class SensoresPageModule {}
