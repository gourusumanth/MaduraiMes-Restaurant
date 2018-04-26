import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {NavbarComponent} from './nav/navbar.component';
import {HomeComponent} from './home/home.component';
import {Router, RouterModule} from '@angular/router';
import {MenuComponent} from './Menu/menu.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ChefsComponent} from './Chefs/chefs.component';
import {ContactComponent} from './contact/contact.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {AboutusComponent} from './Aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    GalleryComponent,
    ChefsComponent,
    ContactComponent,
    TestimonialsComponent,
    AboutusComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'chefs', component: ChefsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'aboutus', component: AboutusComponent },
      // { path: 'testimonials', component: TestimonialsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
