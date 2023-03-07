import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UUID} from "angular2-uuid";

import { IUser } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent implements OnInit {
  addUserForm = this.fb.group({
    surname:    ['', Validators.required],
    name:       ['', Validators.required],
    middlename: ['', Validators.required]
  })
  isSubmitted = false;
  usersFormSubscription: Subscription;

  constructor(private fb: FormBuilder, private UsersService: UsersService) {}

  onSubmit(): void {
    this.isSubmitted = true;
    const newUser: IUser = {
      id:           UUID.UUID(),
      surname:      this.addUserForm.get('surname')?.value || '',
      name:         this.addUserForm.get('name')?.value || '',
      middlename:   this.addUserForm.get('middlename')?.value || '',
    }
    this.usersFormSubscription = this.UsersService.postUser(newUser).subscribe(() => {})
    this.addUserForm.reset();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.usersFormSubscription) this.usersFormSubscription.unsubscribe();
  }
}
