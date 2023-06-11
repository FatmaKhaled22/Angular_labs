import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  // default path
  // {path:'',component:ViewProfileComponent},
  {
    path:'',
    redirectTo:'/user/',
    pathMatch:'full'
  },
  {path: 'viewprofile', component: ViewProfileComponent,title:"View Profile"},
  {path: 'editprofile', component: EditProfileComponent,title:"Edit Profile"},
]


@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})


export class UserModule { }
