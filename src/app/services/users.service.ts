import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IUser } from 'src/app/models/users';
import { catchError, throwError } from "rxjs";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://localhost:3000/users';
  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  getUsers() {
    return this.http.get<IUser[]>(this.url)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  postUser(user: IUser) {
    return this.http.post<IUser>(this.url, user)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  deleteOneUser(id: string) {
    return this.http.delete<void>(`${this.url}/${id}`)
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }
}
