﻿import { Component } from '@angular/core';
import { ZomatoService } from '../app/services/zomato.service';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../app/models/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    restaurant: Restaurant;

    constructor(private zomatoService : ZomatoService) {
        this.getRest();
    }

    title = 'Uview';

    getRest() {
        this.zomatoService.getRestaurant(7004429).subscribe(rest => {
            this.restaurant = rest;
        });
    }

}
