import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: IUser[];
  usersGetSubsciption: Subscription;
  userDeleteSubsciption: Subscription;
  isLoading = false;

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.usersGetSubsciption = this.UsersService.getUsers().subscribe((data) => {
      this.users = data;
      this.isLoading = false;
    })
  }

  ngOnDestroy() {
    if (this.usersGetSubsciption) this.usersGetSubsciption.unsubscribe();
    if (this.userDeleteSubsciption) this.userDeleteSubsciption.unsubscribe();
  }

  removeUser(id: string) {
    this.userDeleteSubsciption  = this.UsersService.deleteOneUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id)
    })
  }
}
