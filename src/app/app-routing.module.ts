import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { ErrorComponent } from './components/error/error.component';
import { UsersComponent } from './components/users/users.component';


// const routes: Routes = [
//   { path: '', redirectTo: 'users', pathMatch: 'full' },
//   { path: 'users', component: UsersComponent },
//   { path: 'users/:id', component: UsersComponent },
//   { path: 'add', component: AddUsersComponent }
// ];

const routes: Routes = [

  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  {path: 'AddUser',component: AddUsersComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
