import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBlockComponent } from './blocks/header-block/header-block.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderBlockComponent,
  ],
  exports: [
    HeaderBlockComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ]
})
export class HeaderBlockModule { }
