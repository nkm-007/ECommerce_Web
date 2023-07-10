import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private fs : AngularFirestore, private as :AuthService) { }

  addToCart(Product: any){
    
    return this.fs.collection(`users/${this.as.userId}/cart`).add(Product);
  }

  getCard(){
    return this.fs.collection(`users/${this.as.userId}/cart`).snapshotChanges()
  }

  deleteddocfromcart(id: any){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).delete()
  }

  Updatedocfromcart(id: any,amount :any){
    return this.fs.doc(`users/${this.as.userId}/cart/${id}`).update({amount})
  }
  

}
