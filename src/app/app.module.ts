import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendingApprovalComponent } from './components/pending-approval/pending-approval.component';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import { FilterComponent } from './components/filter/filter.component';
import { PendingInfoComponent } from './components/pending-info/pending-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PendingApprovalComponent,
    FilterComponent,
    PendingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    InputTextModule,
    CardModule,
    CheckboxModule,
    DropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
