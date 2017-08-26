import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from '../models/restaurant';

import 'rxjs/add/operator/map';

@Injectable()
export class ZomatoService {

    apiKey: string;
    baseUrl: string;

    constructor(private http : Http) {
        this.apiKey = "caf838732e9f9772993a3dd731d4c0a1";
        this.baseUrl = "https://developers.zomato.com/api/v2.1/";
    }

    getRestaurant(id: number): Observable<Restaurant> {
        let header = new Headers();
        header.append("user-key", this.apiKey);
        return this.http.get(this.baseUrl + "/restaurant?res_id=" + id, { headers: header })
            .map(res => res.json());
    }

    getSearch(searchTerm: string): Observable<Restaurant[]> {
        let header = new Headers();
        header.append("user-key", this.apiKey);
        return this.http.get(this.baseUrl + "/restaurant?res_id=", { headers: header })
            .map(res => res.json());
    }

}
