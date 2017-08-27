import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ZomatoService } from '../services/zomato.service';
import { Restaurant } from '../models/restaurant';
import { Review } from '../models/review';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
    restaurant: Restaurant;
}

@Component({
    selector: 'restaurant-modal',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

    restaurant: Restaurant;

    mapsUrl: string;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    openMapTab() {
        var mapsUrl = "www.google.com/maps/search/" + this.restaurant.name;
        var newurl = mapsUrl.replace(" ", "+");
        
    }

    close() {
        super.close();
    }

}