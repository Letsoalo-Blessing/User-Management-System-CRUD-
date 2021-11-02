import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';
import {AuthService} from '../../_services/auth.service';
import { User } from 'src/app/_modal/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  currentUser = null;
  public users: User[]=[];
  private roles: String[];
  isLoggedIn=false;
  showAddUser=false;
  username:String;

  constructor(  private router : Router, private AuthService: AuthService,
    private TokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.loadUsers();

    this.isLoggedIn=!!this.TokenStorage.getToken();

    if(this.isLoggedIn){

      const user= this.TokenStorage.getUser();
      this.roles=user.roles;
      this.showAddUser=this.roles.includes('ROLE_ADMIN');

      this.username=user.username;
    }
  }

  AddUser(){

    this.router.navigate(['AddUser'])
  }

  loadUsers(){

    this.AuthService.getUsers().subscribe(
        (items: User[])=>{
          this.users.splice(0, this.users.length);
          this.users.push(...items);
          console.log(this.users)
        }
    );
  }
  // deleteUser(id: String) {
  //   this.AuthService.deleteUser(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.loadUsers;
  //       },
  //       error => console.log(error));
  // }

  deleteUser(){
    this.router.navigate(['AddUser'])
  }
}
