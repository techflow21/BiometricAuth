import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [AddEditUserComponent, ListUserComponent],
  imports: [CommonModule],
})

export class UsersModule {}
