import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser[]>(this.url)
  }

  getSingleUser(id: string) {
    return this.http.get<IUser>(`${this.url}/${id}`)
  }

  postUser(user: IUser) {
    return this.http.post<IUser>(this.url, user)
  }

  deleteOneUser(id: string) {
    return this.http.delete<void>(`${this.url}/${id}`)
  }
}
