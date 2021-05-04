import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { HomeComponent } from './home/home.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KeyboardService } from './services/keyboard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    SettingsComponent,
    HomeComponent,
    KeyboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [KeyboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
