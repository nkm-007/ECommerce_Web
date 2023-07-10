import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isUser: boolean=false;

  constructor(private as: AuthService){}

  isOpen: boolean=false;
  toggleNavBar(){
    this.isOpen=!this.isOpen;
  }
  ngOnInit(){
    this.as.user.subscribe(user=>{
      if(user) {this.isUser=true
         this.as.userId=user.uid
      }
      else {this.isUser=false
      this.as.userId=''}
    })
  }

  logout(){
    this.as.logout();
  }

}
