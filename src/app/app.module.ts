import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { CounterService } from './counter.service';
import { CounterDashComponent } from './counter-dash/counter-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AddUsersComponent,
    CounterDashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
