import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZomatoService } from '../app/services/zomato.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RestaurantComponent } from '../app/restaurant_component/restaurant.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      AppComponent,
      RestaurantComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    BootstrapModalModule,
    FormsModule
  ],
  entryComponents: [
      RestaurantComponent
  ],
  providers: [ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
