import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  errormsg: string='';
  
  constructor(private as : AuthService, private user: UserService, private router: Router){}

  signup(form: any){

    // console.log(form.value.email);

    this.as.signup(form.value.email,form.value.password)
    .then(data =>{
      this.user.addNewUser(data.user?.uid, form.value.name, form.value.address)
      this.errormsg='',
      this.router.navigate(['/'])
    })
    .catch(err => this.errormsg=err)


  }

}
