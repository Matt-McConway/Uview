export class Restaurant {
    id:number;
    name:string;
    url:string;
    location: Location;
    featured_image: string;
    user_rating: UserRating;
}

class Location{
    address:string;
    locality:string;
    city:string;
    zipcode:string;
    country_id:number;
}

class UserRating{
    aggregate_rating:number;
    votes:number;
}