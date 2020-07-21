import { Component, OnInit } from '@angular/core';
import { Iproducts } from './product';
import { newArray } from '@angular/compiler/src/util';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

 
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    // _listFilter here is to hold the listFilter vALEU
    private _listFilter: string ;
    // when data binding needed, html will call getter to get the value
    get listFilter(){
      console.log("list filter ran", this._listFilter)
      return this._listFilter;
    }
    // data binding calls the setter to pass the changed valeu
    set listFilter(value: string){
      console.log("set value ran", value)
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products ;
    }

    filteredProducts: Iproducts[];
    products: Iproducts[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2019",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2019",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        },
        {
          "productId": 5,
          "productName": "Hammer",
          "productCode": "TBX-0048",
          "releaseDate": "May 21, 2019",
          "description": "Curved claw steel hammer",
          "price": 8.9,
          "starRating": 4.8,
          "imageUrl": "assets/images/hammer.png"
        },
        {
          "productId": 8,
          "productName": "Saw",
          "productCode": "TBX-0022",
          "releaseDate": "May 15, 2019",
          "description": "15-inch steel blade hand saw",
          "price": 11.55,
          "starRating": 3.7,
          "imageUrl": "assets/images/saw.png"
        },
        {
          "productId": 10,
          "productName": "Video Game Controller",
          "productCode": "GMG-0042",
          "releaseDate": "October 15, 2018",
          "description": "Standard two-button video game controller",
          "price": 35.95,
          "starRating": 4.6,
          "imageUrl": "assets/images/xbox-controller.png"
        }
      ];
      toggleImage(): void{
          this.showImage = !this.showImage;
      }

       // constructor is used to ninitalize the value; 
  // constructor runs as soon as class loads  
      constructor(){
        this.listFilter = 'cart';
        this.filteredProducts = this.products;
      }

      performFilter(filterBy: string): Iproducts[]{
        filterBy = filterBy.toLocaleLowerCase();
        console.log("perform Filtr ran", filterBy);
        return this.products.filter((product: Iproducts) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
    //  as we are implementing onintit interface, we need to define its method ngOnit
      ngOnInit(): void{
          console.log('In oninit');
      }
}