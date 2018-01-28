import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
  }

}
