import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { contactResolver } from 'src/resolver/contact-resolver';
// import { Home } from '@mui/icons-material';
import { HomeViewComponent } from './pages/home-view/home-view.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
 
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeViewComponent },
  { path: 'contact', component: ContactIndexComponent, children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: {contact: contactResolver} },
      { path: 'edit', component: ContactEditComponent }
      ]
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    // canActivate: [authGuard],
    resolve: {contact: contactResolver}
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
