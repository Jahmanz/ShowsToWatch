import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowsToWatchComponent }   from './showstowatch/showstowatch.component';
import { ShowlistComponent }   from './showlist/showlist.component';
import { ShowDetailComponent }   from './show-detail/show-detail.component';
import { ShowDetailComponent2 }   from './show-detail/show-detail.component';

import { AdminComponent }   from './admin/admin.component';
import { AdminComponent2 }   from './admin/admin.component';


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
    path: 'showstowatch/:id',
    component: ShowDetailComponent2
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin2',
    component: AdminComponent2
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
