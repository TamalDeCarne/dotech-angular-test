import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersModalComponent } from './components/users-modal/users-modal.component';
import { AngularMaterialModule } from './angular-material.module';
import { ApiTestService } from './services/api-test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersModalComponent
  ],
  entryComponents:[UsersModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [ApiTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
