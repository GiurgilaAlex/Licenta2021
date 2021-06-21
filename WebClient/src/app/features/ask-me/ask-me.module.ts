import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { AskMeRoutingModule } from './ask-me-routing.module';
import { AskMeComponent } from './containers/ask-me/ask-me.component';

@NgModule({
  declarations: [AskMeComponent],
  imports: [
    CommonModule,
    AskMeRoutingModule,
    SharedModule,
    AgmCoreModule
  ]
})
export class AskMeModule { }
