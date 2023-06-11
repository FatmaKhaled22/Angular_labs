import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Icategory } from 'src/app/Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsList: Iproduct[];
  public category : Icategory[];

  constructor() {
    // categoryID
    //1=> tables   , 2=>chairs    ,3=> TV
    this.category = [{Id:1 , Name: 'Tables'}, {Id:2 , Name: 'Chairs'}, {Id:3 , Name: 'TV'}, {Id:4 , Name: 'Vase' }]; 

    this.productsList = [
      {
        id: 1,
        name: 'Miles Wooden Top Side Table',
        price: 12000,
        quantity: 4,
        Material: 'wood',
        categoryID: 1,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162657820-162657820-HC26102020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
      },
      {
        id: 5,
        name: 'Trixia 4-Seater Glass Top Dining Table',
        price: 30000,
        quantity: 8,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,

        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'Metal',
      },
      {
        id: 25,
        name: 'Gasha Marble Top Side Table',
        price: 14000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 1,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'Metal',
      },
      {
        id: 7,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 2,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'Upholstered Seating',
      },
      {
        id: 17,
        name: 'Ventura Fabric Dining Chair',
        price: 1500,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'Upholstered Seating',
      },
      {
        id: 9,
        name: 'Boston Study Chair',
        price: 1000,
        quantity: 10,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 2,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'Upholstered Seating',
      },
      {
        id: 10,
        name: 'Coby Extendable TV Unit',
        price: 13000,
        quantity: 0,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'Wood',
      },
      {
        id: 15,
        name: 'Accent TV Unit',
        price: 36999,
        quantity: 4,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'MDF',
      },
      {
        id: 55,
        name: 'Plymouth TV Unit',
        price: 36999,
        quantity: 3,
        PrdimgURL:
          'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$',
        categoryID: 3,
        Details:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, accusamus nihil veniam reiciendis aut ea cupiditate soluta, consequuntur eum error fugit facere accusantium aperiam quis ratione nulla impedit necessitatibus distinctio!',
        Material: 'wood',
      },
    ];
  }
  searchFilter(filterBy: number): Iproduct[] {
    // filterBy = filterBy.toLocaleLowerCase();
    return this.productsList.filter((prod: Iproduct) =>
      // prd.name.toLocaleLowerCase().includes(filterBy)
      prod.price == filterBy 
    );
  };
  getProdByID(prdID: number): Iproduct | undefined {
    return this.productsList.find((prd) => prd.id == prdID);
  };
  getProdByCatID(catID: number): Icategory | undefined {
    return this.category.find((prd) => prd.Id == catID);
  };
  getAllProds(): Iproduct[] {
    return this.productsList;
  };
  getAllCatProds(): Icategory[] {
    return this.category;
  };
  getProductsByIDS():number[]{
    return this.productsList.map(prod=>prod.id);
  }
}
