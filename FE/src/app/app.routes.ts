import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ServicesComponent} from "./services/services.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', redirectTo: ''}

];
