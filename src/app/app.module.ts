import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { DogListComponent } from './components/doglist/doglist.component';
import { DogService } from './components/doglist/doglist.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SeparatorComponent,
    DogListComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
