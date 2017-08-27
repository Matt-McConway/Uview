import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZomatoService } from '../app/services/zomato.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
