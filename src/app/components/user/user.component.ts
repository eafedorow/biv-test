import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: IUser;
  @Input() index: number;
  @Output() outDeletedUserId = new EventEmitter<string>();

  constructor(private UsersService: UsersService){}

  returnId(id: string) {
    this.outDeletedUserId.emit(id);
  }
}
