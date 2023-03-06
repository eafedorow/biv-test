import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserFormComponent } from "./components/add-user-form/add-user-form.component";
import { UsersListComponent } from "./components/users-list/users-list.component";



const routes: Routes = [
  { path: '', component: AddUserFormComponent },
  { path: 'users', component: UsersListComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
