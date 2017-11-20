import { Component } from '@angular/core';

import { Hero, HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService]
})
export class AppComponent {
  title = 'Angular Animations Demo';
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = heroService.heroes;
  }
}
