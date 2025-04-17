import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommunityComponent } from './pages/community/community.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'community',
    component: CommunityComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
