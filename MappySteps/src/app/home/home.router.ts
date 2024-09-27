import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'navigate',
        loadChildren: () =>
          import('../pages/navigate/navigate.module').then(m => m.NavigatePageModule)
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },

      {
        path: 'routehistory',
        loadChildren: () =>
          import('../pages/route/route.module').then(m => m.RoutePageModule)
      },

      {
        path: 'rewards',
        loadChildren: () =>
          import('../pages/rewards/rewards.module').then(m => m.RewardsPageModule)
      },

      {
        path: 'feedback',
        loadChildren: () =>
          import('../pages/feedback/feedback.module').then(m => m.FeedbackPageModule)
      },
      {
        path: 'update',
        loadChildren: () =>
          import('../pages/update/update.module').then(m => m.UpdatePageModule)
      }
    ]
  }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter {}
