import { Component, Input } from '@angular/core';
import wibble, { thing } from './somedata';

@Component({
  selector: 'lunchtime',
  template: `
    <h2>Lunchtime Component</h2>
    <p>Time for {{meal}}! It's {{ now | date }}</p>
  `,
  styles: [`
    h2 {
      font-family: "Open Sans", Helvetica, Verdana, sans-serif;
      color: green;
    }
    `]
})
export class LunchtimeComponent {
  now: Date = new Date();
  @Input() meal = 'lunch';

  constructor() {
  }

}
