import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { User } from 'src/app/_modal/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  username:String;
  public user: User;
  
  constructor(private router : Router,private AuthService:AuthService,private route: ActivatedRoute) { 
    this.route.params.subscribe((params: Params) => {
      this.username = params.username;
      console.log(this.username);
      this.AuthService.findUserByUsername(this.username).subscribe(user => {
        this.user = user;
        console.log(this.user);
      }
      );
    }
  )
  }
  
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
