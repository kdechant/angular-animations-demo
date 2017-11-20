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

import { Villain } from './villain.service';

@Component({
  selector: 'app-list-banner-fade',
  template: `
    <div class="list-container">
      <div class="list-item" *ngFor="let villain of villains"
        [@simpleFadeAnimation]="'in'">
        {{ villain.name }}
        <div class="message" [@messageAnimation]="villain.messageState">
          {{ villain.message }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./list.component.css'],
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
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        // fading out uses a different syntax, with the "style" being passed into animate()
        animate(600, style({opacity: 0})))
    ]),

    // the animation for the message
    trigger('messageAnimation', [

      // this defines the "resting" styles for the "visible" state
      // (i.e., what styles the message element has when visible)
      state('visible', style({
        opacity: 0.9,
        display: 'block',
      })),

      // this defines the "resting" styles for the "hidden" state.
      // (i.e., what styles the message element has when hidden)
      state('hidden',   style({
        opacity: 0,
        display: 'none',
      })),

      // transition from "hidden" to "visible" states using an animation
      transition('hidden => visible', animate('300ms ease-in')),

      // transition from "visible" to "hidden" similarly
      transition('visible => hidden', animate('300ms ease-out'))

    ]),

  ]
})
export class ListBannerFadeComponent {
   @Input() villains: Villain[];
}
