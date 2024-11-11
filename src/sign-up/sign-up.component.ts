import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { UserDetails } from '../models/UserDetails';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private router: Router, private userService: UserServiceService){
    
  }
  OnSubmit(registerform: any){

    var userName = registerform.controls["UserName"].value;
    var email = registerform.controls["Email"].value;
    var password = registerform.controls["Password"].value;
    var user = new UserDetails();
    
    user.name = userName,
    user.email = email,
    user.password = password

    this.userService.userDetails.push(user);
    this.router.navigate(["/RegisterLogin"]);
  }
}
