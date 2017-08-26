import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZomatoService } from '../app/services/zomato.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
