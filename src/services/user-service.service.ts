import { Injectable } from '@angular/core';
import { UserDetails } from '../models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor() { }

  userDetails : UserDetails[] =[
    {name: "admin", email: "x@xyx.com", password: "admin"},
  ];
  
  IsValidUser(userName: string, Password: string){
    var findIndex = this.userDetails.findIndex(x => x.name == userName && x.password == Password);

    if(findIndex > -1){
      return true;
    }
    
    return false;
  }
  
}
