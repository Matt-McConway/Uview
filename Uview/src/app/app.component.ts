import { Component } from '@angular/core';
import { ZomatoService } from '../app/services/zomato.service';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../app/models/restaurant';
import { Review } from '../app/models/review';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    restaurant: Restaurant;
    reviews: Review[];
    searchRes: Restaurant[];
<<<<<<< HEAD
    searchWord: string;
    restDetails: any;
=======
>>>>>>> 273db44ff2f9130f208a9128615c0062a02d5c7c

    constructor(private zomatoService : ZomatoService) {
        this.getRest();
        this.getReviews();
<<<<<<< HEAD
        this.getRestaurantInfo();
=======
        this.getSearch();
>>>>>>> 273db44ff2f9130f208a9128615c0062a02d5c7c
    }

    title = 'Uview';

    getRest() {
        this.zomatoService.getRestaurant(7004429).subscribe(rest => {
            this.restaurant = rest;
        });
    }

    getReviews() {
        this.zomatoService.getReviews(7004429)
            .subscribe(rest => {
                this.reviews = rest;
            });
    }

    getSearch() {
        this.zomatoService.getSearch("als deli")
            .subscribe(rest => {
                this.searchRes = rest;
                console.log(rest);
            });
    }

    getRestaurantInfo() {
        this.zomatoService.getDetails().
        subscribe(rest => {
            this.restDetails = rest;
            console.log(rest);
        });
    }

}
