import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Interface/products.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
Products: Array<any> = [
  // {Name:"Banana", Price: 3, Desc:"Fruits",ProductPath:'assets/pics/Banana.jpg'},
  // {Name:"Kiwi", Price: 3, Desc:"Fruits",ProductPath:'assets/pics/kiwi.jpg'},
  // {Name:"Orange", Price: 3, Desc:"Fruits",ProductPath:'assets/pics/orange.jpg'},
  // {Name:"Strawberry", Price: 3, Desc:"Fruits",ProductPath:'assets/pics/strawberry.jpg'}

];
add : number =-1;
constructor( private ps: ProductsService, private cart : CartService, private as : AuthService, private rout: Router){}

ngOnInit(){
  this.ps.getAllProducts().subscribe(
    ( data: any[]) => this.Products = data
  );
}

addtoCart(index: number){
  if(this.as.userId)
    this.add = +index;
  else
    this.rout.navigate(['/login'])
  // console.log('Added', this.Products[index]);
}

buy(amount : any){
   let selectedProduct=this.Products[this.add];
   let data= {
    name: selectedProduct.Name,
    price:selectedProduct.Price,
    amount : +amount
   }
   this.cart.addToCart(data).then( ()=> this.add=-1).catch(err=>console.log());


}


}
