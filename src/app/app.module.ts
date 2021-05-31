import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaneDashboardComponent } from './components/lane-dashboard/lane-dashboard.component';
import { LanesChildComponent } from './components/lanes-child/lanes-child.component';

@NgModule({
  declarations: [
    AppComponent,
    LaneDashboardComponent,
    LanesChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
