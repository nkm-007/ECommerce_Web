import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  Shoppingcart: Array<any> = [];

  constructor( private cart: CartService){ }

  ngOnInit(){
    this.cart.getCard().subscribe( cs=>{
      this.Shoppingcart= cs.map(x=>{
        return {
          id : x.payload.doc.id,
          ...x.payload.doc.data() as {}  //its extracting all data thats why '...'
        }
      })
    })
  }

  deleteCart(index : any){
    this.cart.deleteddocfromcart(this.Shoppingcart[index].id)
  }

  updateCart(index: any){
    this.cart.Updatedocfromcart(this.Shoppingcart[index].id, this.Shoppingcart[index].amount)
  }

}
