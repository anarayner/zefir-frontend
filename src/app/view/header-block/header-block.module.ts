import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBlockComponent } from './blocks/header-block/header-block.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MenuComponent} from "../menu/menu.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderBlockComponent
  ],
  exports: [
    HeaderBlockComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MenuComponent,
    RouterLink
  ]
})
export class HeaderBlockModule { }
