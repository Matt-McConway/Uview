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

    constructor(private http: Http) {
        this.apiKey = 'caf838732e9f9772993a3dd731d4c0a1';
        this.baseUrl = 'https://developers.zomato.com/api/v2.1/';
    }

    getRestaurant(id: number): Observable<Restaurant> {
        const header = new Headers();
        header.append('user-key', this.apiKey); // Add review count by adding "&count=?" to url
        return this.http.get(this.baseUrl + '/restaurant?res_id=' + id, { headers: header })
            .map(res => res.json());
    }

    getReviews(id: number): Observable<Review[]> {
        const header = new Headers();
        header.append('user-key', this.apiKey);
        return this.http.get(this.baseUrl + '/reviews?res_id=' + id, { headers: header })
            .map(res => res.json().user_reviews);
    }

    getSearch(searchTerm: string): Observable<Restaurant[]> {
        const header = new Headers();
        header.append('user-key', this.apiKey);
        return this.http.get(this.baseUrl + '/search?q=' + searchTerm, { headers: header })
            .map(res => res.json().restaurants);
    }
}
