import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  private roles: String[];
  isLoggedIn=false;
  showAddUser=false;
  username:String;

  constructor(private router: Router, private TokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn=!!this.TokenStorage.getToken();

    if(this.isLoggedIn){

      const user= this.TokenStorage.getUser();
      this.roles=user.roles;
      this.showAddUser=this.roles.includes('ROLE_ADMIN');

      this.username=user.username;
    }
  }

  logout() : void{
    this.TokenStorage.signOut();
    window.location.reload();
  }
}
