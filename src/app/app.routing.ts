import { Routes, RouterModule } from '@angular/router';

import { LoginBoxComponent } from './login-box.component';
import { UserListComponent } from './user-list.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    { path: '', component: LoginBoxComponent },
    { path: 'list', component: UserListComponent, canActivate: [AuthGuard] },
    // { path: 'list', component: UserListComponent },
    { path: 'login', component: LoginBoxComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);