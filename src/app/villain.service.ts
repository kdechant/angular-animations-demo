import { Injectable } from '@angular/core';

export class Villain {
  // this is our data model. the "message" and "messageState" properties are used in the "banner" demo
  constructor(public name: string,
              public message = '',
              public messageState = 'hidden'
  ) { }

}

const ALL_VILLAINS = [
  'Professor Atombender',
  'Parallel Zombie',
  'Mothman',
  'Scorpio',
  'Iron Baron',
  'Crimson Clown',
  'Faye Tality',
  'Void',
  'Frozen Specter',
  'Sly',
].map(name => new Villain(name));

@Injectable()
export class VillainService {

  villains: Villain[] = [];

  // the "animating" flag is set when an animation is happening. Its purpose is to disable the
  // buttons so we can't do too many things at once.
  animating: boolean = false;

  canAdd() {
    return this.villains.length < ALL_VILLAINS.length && !this.animating;
  }

  canRemove() {
    return this.villains.length > 0 && !this.animating;
  }

  add(active = true) {
    let villain = ALL_VILLAINS[this.villains.length];

    // when creating a hero, make the message visible
    villain.messageState = 'visible';
    villain.message = "Added!";

    this.villains.push(villain);

    // set a timeout so the message disappears after a short time
    setTimeout(function() { villain.messageState = "hidden" }, 1500);
  }

  remove() {
    let villain = this.villains[this.villains.length - 1];

    // we don't remove the villain immediately. instead, we set the message to visible.
    villain.messageState = 'visible';
    villain.message = "Removed!";
    this.animating = true;

    var that = this; // needed in the setTimeout() callback

    // after the message has been visible for a short time, we actually remove the
    // villain from the list
    setTimeout(function() {
      villain.messageState = 'hidden';
      that.villains.length -= 1;
      that.animating = false;
    }, 1500);
  }

}
