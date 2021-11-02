import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_modal/user';

const AUTH_API = 'http://localhost:8080/api/auth/';
const USER_API = 'http://localhost:8080/api/user/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      title: user.title,
      dob: user.dob
    }, httpOptions);
  }

  deleteUser(id: String): Observable<any> {
    return this.http.delete(AUTH_API+'deleteUser/${_id}');
  }
  delete(id): Observable<any> {
    return this.http.delete(AUTH_API+`deleteUser/${id}`);
  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(AUTH_API+'getUsers');
  }
  editUser(user: User, username: String): Observable<User> {
    return this.http.put<User>(USER_API+`editUser/${username}`, user);
  }

  findUserByUsername(username:String): Observable<User>{
    return this.http.get<User>(USER_API+`findUserByUsername/${username}`);
  }
}
