import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { AuthenticateComponent } from './authentication';
import { DashboardComponent } from './dashboard';

@NgModule({
  declarations: [
    AuthenticateComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ViewsModule { }