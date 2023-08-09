import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { BikeService } from './services/bike.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManufacturerService } from './services/manufacturer.service';
import { ConfirmationService } from 'primeng/api';
import { AddComponent } from './dialog/forms/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [
    BikeService,
    ManufacturerService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
