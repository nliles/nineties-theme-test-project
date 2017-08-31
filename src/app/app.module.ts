import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {Store, provideStore} from '@ngrx/store'; 
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { toggleStyle } from './reducers/style.reducer';
import { StyleService } from './services/style.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({toggleStyle})
  ],
  providers: [StyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
