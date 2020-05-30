import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcommerceAppSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [EcommerceAppSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class EcommerceAppHomeModule {}
