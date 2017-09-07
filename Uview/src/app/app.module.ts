import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZomatoService } from '../app/services/zomato.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RestaurantComponent } from '../app/restaurant_component/restaurant.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
      AppComponent,
      RestaurantComponent,
      ModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    BootstrapModalModule,
    FormsModule
  ],
  entryComponents: [
      RestaurantComponent,
      ModalComponent
  ],
  providers: [ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
