import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = 'LoginForms';
  message!: string;
  constructor(private router: Router, private userService: UserServiceService){

  }

  OnSubmit(userForm: any){
    if(userForm.valid){
    var isValid = this.userService.IsValidUser(userForm.controls['UserName'].value, userForm.controls['Password'].value);
      if(isValid){
      this.router.navigate(['/home', userForm.controls['UserName'].value]);
      }
      else{
        this.message = "Invalid User/Password."
      }
    }
    else{
      this.markAllTouched(userForm);
    }
  }
  markAllTouched(userForm: any) {
    for(let control in userForm.controls){
      if( userForm.controls[control].untouched){
      userForm.controls[control].errors.required = true;
      userForm.controls[control].touched = true;
      }
    }
  }
}
