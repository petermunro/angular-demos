import { Component } from '@angular/core';

@Component({
  selector: 'ngfor-demo',
  template: `
    <ul>
      <li *ngFor="let fruitItem of fruit; let i = index">
        {{i}}: {{fruitItem}}
      </li>
    </ul>
  `,
})
export class NgForDemoComponent {
  fruit = ['apple', 'banana', 'custard apple', 'durian', 'fig'];
}
