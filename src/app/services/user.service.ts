import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private as: AngularFirestore) { }

  addNewUser(id: any, name: string ,address: string){
    return this.as.doc('users/'+ id).set({
      name,
      address
    })
  }
}
