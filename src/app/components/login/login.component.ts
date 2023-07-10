import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errormsg: string='';
  constructor(private as: AuthService,private router: Router){

  }
  login(form: any){
    this.as.login(form.value.Email, form.value.Password)
    .then(data=> 
      {
        this.errormsg='',
      this.router.navigate(['/'])
      })
    .catch(err => this.errormsg=err)

    // this.router.navigate(['/'])
  }

}
