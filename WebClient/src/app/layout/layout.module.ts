import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared';
import { SidebarLayoutComponent } from './sidebar-layout';

@NgModule({
  declarations: [SidebarLayoutComponent],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule
  ]
})
export class LayoutModule { }