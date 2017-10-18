import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LunchtimeComponent } from './lunchtime.component';
import { LinkDemoComponent } from './link-demo.component';
import { ImageSelectorComponent } from './image-selector.component';
import { StyleExampleComponent } from './style.component';
import { NgForDemoComponent } from './ngfor-example.component';

@NgModule({
  declarations: [
    AppComponent,
    LunchtimeComponent,
    LinkDemoComponent,
    ImageSelectorComponent,
    StyleExampleComponent,
    NgForDemoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LunchtimeComponent, AppComponent]
})
export class AppModule { }
