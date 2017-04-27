import { Component , OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';



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
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero : Hero;

  constructor(private heroService: HeroService) { } //angular supplies an instance of HeroService when it creates an AppComponent
  //  this.heroes = this.heroService.getHeroes();
  getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }


}
