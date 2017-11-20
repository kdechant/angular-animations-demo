import { Component } from '@angular/core';

import { Hero, HeroService } from './hero.service';
import { Villain, VillainService } from './villain.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService, VillainService]
})
export class AppComponent {
  title = 'Angular Animations Demo';
  heroes: Hero[];
  villains: Villain[];

  constructor(private heroService: HeroService, private villainService: VillainService) {
    this.heroes = heroService.heroes;
    this.villains = villainService.villains;
  }
}
