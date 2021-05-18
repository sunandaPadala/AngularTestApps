import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PageComponent } from './page/page.component';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/sidebar';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    BrowserAnimationsModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
