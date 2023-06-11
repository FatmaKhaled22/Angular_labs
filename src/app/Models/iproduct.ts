export interface Iproduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    categoryID: number;
    PrdimgURL?:string;
    IsPurchased? : boolean;
    Details?: string;
    Material ?: string;
    img?: string;
}