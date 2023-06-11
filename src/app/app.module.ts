import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentProductsComponent } from './Components/parent-products/parent-products.component';
import { CardStyleDirective } from './Directives/card-style.directive';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import {HttpClientModule} from '@angular/common/http';
import { UserRegistrationComponent } from './Components/user-registration/user-registration.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { UserAuthComponent } from './Components/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductsComponent,
    ParentProductsComponent,
    CardStyleDirective,
    CreditCardPipe,
    NotFoundPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    ProductDetailsComponent,
    UserRegistrationComponent,
    NewProductComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
