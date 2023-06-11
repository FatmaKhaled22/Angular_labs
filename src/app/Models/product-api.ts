export interface ProductApi {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    img:string,
    rating:{rate:number,count:number}
}
