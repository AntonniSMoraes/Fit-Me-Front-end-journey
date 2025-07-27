export interface Restaurant {
    objectId : string;
    name : string;
    rating : number;
    deliveryTime: string;
    image: string;
    location: string;
    topDishes: Dish[]
}

export interface Dish {
    name : string;
    description: string;
    image: string;
    price: number;
}