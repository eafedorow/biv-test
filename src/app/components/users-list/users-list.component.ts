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
  usersSubsciption: Subscription;

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
    this.usersSubsciption = this.UsersService.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

  ngOnDestroy() {
    if (this.usersSubsciption) this.usersSubsciption.unsubscribe();
  }

  removeUser(id: string) {
    this.UsersService.deleteOneUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id)
    })
  }
}
