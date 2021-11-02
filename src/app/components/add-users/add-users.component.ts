import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_modal/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor(private router : Router,private AuthService:AuthService) { }
  
  form: any={};
  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage='';

  ngOnInit(): void {
  }

  onSubmit():void{

    this.AuthService.register(this.form).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful=true;
        this.isSignUpFailed=false;
        this.ViewUser();
      },
      err=>{
        this.errorMessage=err.error.message;
        this.isSignUpFailed=true;
      }
    );
  }

  ViewUser(){

    this.router.navigate(['users'])
  }
}
