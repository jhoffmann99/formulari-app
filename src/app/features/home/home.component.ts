import { Component, OnInit } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const options: TypedOptions = {
      strings: ['Daten', 'Bilder', 'Dokumente'],
      typeSpeed: 100,
      backSpeed: 80,
      showCursor: true,
      loop: true,
    };

    const typed = new Typed('.typed-element', options);
  }
}
