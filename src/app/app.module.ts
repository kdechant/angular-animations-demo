import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ListSimpleFadeComponent } from "./list-simple-fade.component";
import { ListBannerFadeComponent } from "./list-banner-fade.component";

@NgModule({
  declarations: [
    AppComponent,
    ListSimpleFadeComponent,
    ListBannerFadeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
