import { Component  } from '@angular/core';
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
    searchWord: string;
    restDetails: any;

    constructor(private zomatoService : ZomatoService) {
        this.getRest();
        this.getReviews();
        this.getRestaurantInfo();
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
        this.zomatoService.getSearch(this.searchWord)
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

    Hokkaido: Restaurant = {
        id: 16774318,
        name: 'Otto Enoteca & Pizzeria',
        url: 'https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village',
        location: {
            address: "15th Avenue, New York, NY 10003",
            locality: "Greenwich Village",
            city: "New York City",
            zipcode: "10003",
            country_id: 216
        },
        featured_image: "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
        user_rating: {
            aggregate_rating: 5,
            votes: 1050
        }
    }

    Girraffe: Restaurant = {
        id: 16774318,
        name: 'Otto Enoteca & Pizzeria',
        url: 'https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village',
        location: {
            address: "15th Avenue, New York, NY 10003",
            locality: "Greenwich Village",
            city: "New York City",
            zipcode: "10003",
            country_id: 216
        },
        featured_image: "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
        user_rating: {
            aggregate_rating: 5,
            votes: 1050
        }
    }

    Nightangle: Restaurant = {
        id: 16774318,
        name: 'Otto Enoteca & Pizzeria',
        url: 'https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village',
        location: {
            address: "15th Avenue, New York, NY 10003",
            locality: "Greenwich Village",
            city: "New York City",
            zipcode: "10003",
            country_id: 216
        },
        featured_image: "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
        user_rating: {
            aggregate_rating: 5,
            votes: 1050
        }
    }

    restaurants: Restaurant[] = [this.Hokkaido, this.Girraffe, this.Nightangle];



}
