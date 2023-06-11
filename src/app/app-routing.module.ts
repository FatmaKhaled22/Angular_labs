import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ParentProductsComponent } from './Components/parent-products/parent-products.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';
import { userAuthGuard } from './Guards/user-auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, title: 'Home page' },
  { path: 'Products', component: ProductsComponent, title: 'Products page' , canActivate: [userAuthGuard]},
  { path: 'ParentProducts', component: ParentProductsComponent, title: 'Parent Products page',canActivate: [userAuthGuard]},
  // parameter
  { path:'productDetails/:prodID',component: ProductDetailsComponent,title:'Product Details page'},
  { path:'newproduct',component: NewProductComponent ,title:'New Product page'},
  { path:'userregister',component: UserRegistrationComponent,title:'User Regiser page'},
  { path: 'AboutUs', component: AboutUsComponent, title: 'About Us page' },
  { path: 'ContactUs', component: ContactUsComponent, title: 'Contact Us page' },
  ///
  { path: 'Login', component: UserAuthComponent, title: 'User login page' },
  { path: 'logout', component: UserAuthComponent, title: 'User logout page' },

  ///lazy loading
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    
  // 404 not found
  { path: '**', component: NotFoundPageComponent, title: '404 Page not found' },
  // wild card path => not found path


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
