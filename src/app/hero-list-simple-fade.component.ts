import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Hero } from './hero.service';

@Component({
  selector: 'app-hero-list-simple-fade',
  template: `
    <div class="hero-list">
      <div class="hero-item" *ngFor="let hero of heroes"
        [@simpleFadeAnimation]="'in'">
        {{ hero.name }}
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    // the trigger name does not matter, but it must match the name used in the [@...] attribute in the template.
    trigger('simpleFadeAnimation', [

      // the "in" style determines how the element looks when it is visible.
      // the style name "in" must match the value of the [@simpleFadeAnimation]="'in'" attribute in the template
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        // the styles start from this point when the element appears
        style({opacity: 0}),
        // and animate toward the "in" state above
        animate(750 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        // fading out uses a different syntax, with the "style" being passed into animate()
        animate(750, style({opacity: 0})))
    ])
  ]
})
export class HeroListSimpleFadeComponent {
   @Input() heroes: Hero[];
}
