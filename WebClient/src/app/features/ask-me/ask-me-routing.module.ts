import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AskMeComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: AskMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskMeRoutingModule { }