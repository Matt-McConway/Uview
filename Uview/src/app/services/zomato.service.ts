import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../models/restaurant';
import { Review } from '../models/review';

import 'rxjs/add/operator/map';

@Injectable()
export class ZomatoService {

    apiKey: string;
    baseUrl: string;
    url: string;

    constructor(private http : Http) {
<<<<<<< HEAD
        this.apiKey = "6b794e0fbbd3b6526a2d15c96006376e";
=======
        this.apiKey = "caf838732e9f9772993a3dd731d4c0a1";
>>>>>>> 273db44ff2f9130f208a9128615c0062a02d5c7c
        this.baseUrl = "https://developers.zomato.com/api/v2.1/";
        this.url = "./restaurants.json";
    }

    getRestaurant(id: number): Observable<Restaurant> {
        let header = new Headers();
        header.append("user-key", this.apiKey); //Add review count by adding "&count=?" to url
        return this.http.get(this.baseUrl + "/restaurant?res_id=" + id, { headers: header })
            .map(res => res.json());
    }

    getReviews(id: number): Observable<Review[]> {
        let header = new Headers();
        header.append("user-key", this.apiKey);
        return this.http.get(this.baseUrl + "/reviews?res_id=" + id, { headers: header })
            .map(res => res.json().user_reviews);
    }

    getSearch(searchTerm: string): Observable<Restaurant[]> {
        let header = new Headers();
        header.append("user-key", this.apiKey);
        return this.http.get(this.baseUrl + "/search?q=" + searchTerm, { headers: header })
            .map(res => res.json().restaurants);
    }

    getDetails():  Observable<any> {
        return this.http.get(".\src\restaurants.json").map((res: any) => res.json());
    }

}
