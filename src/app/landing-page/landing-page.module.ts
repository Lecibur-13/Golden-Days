import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import { NgbModule, NgbCarouselModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";

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
    HttpClientModule,
    NgbCarouselModule,
    NgbPaginationModule,
    NgbModule,
  ]
})
export class LandingPageModule { }
