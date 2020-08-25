import { Component, OnInit } from '@angular/core';
import { Iproducts } from './product';
import { ProductServiceService } from './product-service.service';
import { Observable, range } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    providers: [ProductServiceService]
})

export class ProductListComponent implements OnInit{

 
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    private productURL = 'https://putsreq.com/FI9V0wF60fKAfqoFp83W';

    // _listFilter here is to hold the listFilter vALEU
    private _listFilter: string ;
    // when data binding needed, html will call getter to get the value
    get listFilter(){
      return this._listFilter;
    }
    // data binding calls the setter to pass the changed valeu
    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products ;
    }

    filteredProducts: Iproducts[];
    products: Iproducts[];
      toggleImage(): void{
          this.showImage = !this.showImage;
      }

       // constructor is used to initalize the value; 
  // constructor runs as soon as class loads  
      constructor(private productService: ProductServiceService, private http: HttpClient){

      }

      getProducts(): Observable<Iproducts[]>{
        return this.http.get<Iproducts[]>(this.productURL);
        
      }
    
      // ngOninit runs after the constructor 
      ngOnInit(): void{
        console.log('In oninit');
        this.products = this.productService.getProducts();
        this.listFilter = 'carts';
        this.filteredProducts = this.products;
    }

      ratingValueFromChildComponent(message: string){
        this.pageTitle = 'Product List: ' + message;

      }

      testingOperators(){
        // this method is to test rxjs operators and not actual feature of this app
        const source$: Observable<number> = range(0, 10);

        source$.pipe(
          map(x => x * 3),
          filter(x => x % 2 === 0)

        ).subscribe(x => console.log(x));

        // this.http.get('https://putsreq.com/FI9V0wF60fKAfqoFp83W').subscribe(data => console.log(data));
      }
      // testingOperators();

      performFilter(filterBy: string): Iproducts[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproducts) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
    //  as we are implementing onintit interface, we need to define its method ngOnit
     
}