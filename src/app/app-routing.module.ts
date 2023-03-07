import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserFormComponent } from "./components/add-user-form/add-user-form.component";
import { UsersListComponent } from "./components/users-list/users-list.component";


const routes: Routes = [
  { path: 'add-user', component: AddUserFormComponent },
  { path: 'users', component: UsersListComponent },
  { path: '**', redirectTo: '/add-user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
