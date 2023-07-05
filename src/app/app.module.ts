import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { FormsModule } from '@angular/forms';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { AboutComponent } from './pages/about/about.component';
import { AppFooterComponent } from './cmps/app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactIndexComponent,
    ContactEditComponent,
    ContactFilterComponent,
    HomeViewComponent,
    ContactDetailsComponent,
    AppHeaderComponent,
    AboutComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
