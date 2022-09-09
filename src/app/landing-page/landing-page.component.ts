import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  img = [
      "assets/img/portrait1.jpg",
      "assets/img/why.jpg",
      "assets/img/portrait2.jpg",
  ]

  constructor(
    private config: NgbCarouselConfig
  ) {}

  ngOnInit(): void {}



}
