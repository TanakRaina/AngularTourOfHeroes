import { Component , Input } from '@angular/core';   //to define component we always import componenr symbol
import { Hero } from './hero';


@Component({                                //@component decorator provides meta-data for the component
  selector : 'hero-detail',                //it will match name 'hero-detail' with matching element tag in parent component template
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details !</h2>
      <div><label>id: </label>{{hero.id}}</div>
    <div>
    <label>name:</label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>`
})

export class HeroDetailComponent {
  @Input() hero: Hero;             //@input decorator implies that the property is public and some other template of another component/directive can use this property.
}        //we export a component class because we will be importing it somewhere
