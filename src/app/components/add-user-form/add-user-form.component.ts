import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {IUser} from "../../models/users";
import {UUID} from "angular2-uuid";
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
  addUserForm = this.fb.group({
    surname:    ['', Validators.required],
    name:       ['', Validators.required],
    middlename: ['', Validators.required]
  })
  isSubmitted = false;
  constructor(private fb: FormBuilder, private UsersService: UsersService) {}

  onSubmit(): void {
    this.isSubmitted = true;
    const newUser: IUser = {
      id:           UUID.UUID(),
      surname:      this.addUserForm.get('surname')?.value || '',
      name:         this.addUserForm.get('name')?.value || '',
      middlename:   this.addUserForm.get('middlename')?.value || '',
    }
    this.UsersService.postUser(newUser).subscribe((data) => {
      console.log(data);
    })
    this.addUserForm.reset();
  }
}
