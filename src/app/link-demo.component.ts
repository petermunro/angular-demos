import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-demo',
  template: `
    <h2>Link Demo Component</h2>
    <p>Here is a link: <a href="{{site.url}}" [innerText]="'site.name'"></a></p>
    <p (click)="clickHandler($event); clickHandler2()">Click Me</p>
  `,
})
export class LinkDemoComponent implements OnInit {
  site = {
    name: 'Google',
    url: 'https://google.com/',
  };
  isClicked = false;

  ngOnInit() {
    setTimeout(() => this.site = { name: 'Bloomberg', url: 'https://bloomberg.com'}, 5000);
  }

  clickHandler(event) {
    console.log(event);
    event.target.textContent = this.isClicked ? 'Clicked!' : 'Click Me';
    this.isClicked = !this.isClicked;
  }

  clickHandler2() {
    console.log('handler 2');
  }

}
