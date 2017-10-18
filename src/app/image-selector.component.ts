import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-selector',
  template: `
    <div>
      <p>
        <img [src]="selectedImage">
      </p>
      <button (click)="selectImage('assets/images/Mushroom_940c4e_128px.png')">Mushroom</button>
      <button (click)="selectImage('assets/images/Moon_with_stars_6563eb_128px.png')">Moon</button>
      <button (click)="selectImage('assets/images/Acorn_916006_128px.png')">Acorn</button>
      <button (click)="selectImage('assets/images/Tree_0b7843_128px.png')">Tree</button>
    </div>
  `,
})
export class ImageSelectorComponent {
  selectedImage: string = 'assets/images/Tree_0b7843_128px.png';

  selectImage(image: string) {
    this.selectedImage = image;
  }
}
