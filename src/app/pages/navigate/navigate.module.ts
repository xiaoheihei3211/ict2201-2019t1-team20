import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx'

import { IonicModule } from '@ionic/angular';

import { NavigatePage } from './navigate.page';

const routes: Routes = [
  {
    path: '',
    component: NavigatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [NavigatePage],
  providers: [Geolocation]
})
export class NavigatePageModule {}
