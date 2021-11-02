import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [

  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {path: 'AddUser',component: AddUsersComponent},
  {path: 'login',component: LoginComponent},
  {path: 'EditUser/:id',component: EditUserComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
