import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.default.User | null>;
  userId: string='';

  constructor(private fauth : AngularFireAuth) { 
    this.user= fauth.user;

  }
  signup(email : string , password: string){
    return this.fauth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string ,password: string){
    return this.fauth.signInWithEmailAndPassword(email,password);

  }

  logout(){
    return this.fauth.signOut();
  }


}
