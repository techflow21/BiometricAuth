import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import '@passageidentity/passage-elements/passage-auth';
import '@passageidentity/passage-elements/passage-profile';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  declarations: [AuthComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forRoot(routes), CommonModule, HttpClientModule],
  exports: [RouterModule],
})
export class AccountModule {}
