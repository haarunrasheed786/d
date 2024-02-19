import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OrderComponent } from "./order/order.component";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookComponent } from "./book/book.component";
import { AddUserComponent } from "./adduser/adduser.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {AddBulkComponent} from "./addbulk/addbulk.component";


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        DashboardComponent,
        OrderComponent,
        UserComponent,
        BookComponent,
        AddUserComponent,
        AddBulkComponent,
        LoginComponent,
        SignupComponent,
        ConfirmationDialogComponent



    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,

  ],
    providers: [
    provideAnimationsAsync()
  ],
    exports: [
        DashboardComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
