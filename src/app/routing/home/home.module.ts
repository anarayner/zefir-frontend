import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from "@angular/router";
import {HeaderBlockModule} from "@view/features/header-block/header-block.module";



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
      }
    ]),
    HeaderBlockModule
  ]
})
export class HomeModule { }
