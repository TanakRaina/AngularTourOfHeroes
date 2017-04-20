import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  {id:101,name:'Tanak'},
  {id:102,name:'Annie'},
  {id:103,name:'Garima'},
  {id:104,name:'Shivani'},
  {id:105,name:'Rubberman'},
  {id:106,name:'Dynama'},
  {id:107,name:'Magenta'},
  {id:108,name:'Tupperman'},
];

@Component({
  selector: 'app-root',

  template: `
  <h1>{{title}} </h1>

  <h2>My Heroes</h2>

  <ul class="heroes">
  <li *ngFor="let hero of heroes" on-click="onSelect(hero)" [class.selected]="hero === selectedHero" >
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>

  `,
//'selectedHero' property belongs to the template component but 'hero' property belongs to some other components template therefore it should carry @input decorator
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero : Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
