import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from './user/login/login.component';
import { ImgtvComponent } from './imgtv/imgtv.component';
import { RegisterComponent } from './user/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { UserProfileComponent } from './user-profile/user-profile.component';




@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [LoginComponent, ImgtvComponent, RegisterComponent, UserComponent, UserProfileComponent],
  exports: [LoginComponent, ImgtvComponent, RegisterComponent, UserComponent, UserProfileComponent]
})
export class SharedComponentsModule { }
