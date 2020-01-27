import { Routes } from '@angular/router';
import { UserComponent } from './shared-components/user/user.component';
import { RegisterComponent } from './shared-components/user/register/register.component';
import { UserProfileComponent } from './shared-components/user-profile/user-profile.component';
import { AuthGuard } from '../app/auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'register', component: UserComponent,
        children: [{ path: '', component: RegisterComponent }]
    },
    {
        path: '', redirectTo: '/register', pathMatch: 'full'
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    }

];