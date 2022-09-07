import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import {RouterModule, Routes} from "@angular/router";

export const ROUTES: Routes = [
  {path: '', component: LandingPageComponent},
  // { path: '**', component: <component-name> }
];

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class LandingPageModule { }
