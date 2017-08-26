export class Review{
    rating:number;
    review_text:string;
    id:number;
    likes:number;
    user:User;
    comments_count:number;
}

class User{
    name:string;
    zomato_handle:string;
}