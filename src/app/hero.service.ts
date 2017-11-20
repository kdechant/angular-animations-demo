import { Injectable } from '@angular/core';

export class Hero {
  // this is our data model. the "message" and "messageState" properties are used in the "banner" demo
  constructor(public name: string,
              public message = '',
              public messageState = 'hidden'
  ) { }

}

const ALL_HEROES = [
  'Windstorm',
  'RubberMan',
  'Bombasto',
  'Magneta',
  'Dynama',
  'Narco',
  'Celeritas',
  'Dr IQ',
  'Magma',
  'Tornado',
  'Mr. Nice'
].map(name => new Hero(name));

@Injectable()
export class HeroService {

  heroes: Hero[] = [];

  canAdd() {
    return this.heroes.length < ALL_HEROES.length;
  }

  canRemove() {
    return this.heroes.length > 0;
  }

  add(active = true) {
    let hero = ALL_HEROES[this.heroes.length];
    this.heroes.push(hero);
  }

  remove() {
    this.heroes.length -= 1;
  }

}
