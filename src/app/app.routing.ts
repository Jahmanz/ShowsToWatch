import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowsToWatchComponent }   from './showstowatch/showstowatch.component';
import { ShowlistComponent }   from './showlist/showlist.component';
import { ShowDetailComponent }   from './show-detail/show-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'showstowatch',
    component: ShowsToWatchComponent
  },
  {
    path: 'showlist',
    component: ShowlistComponent
  },
  {
    path: 'shows/:id',
    component: ShowDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
