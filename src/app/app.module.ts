import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import {WebcamModule} from 'ngx-webcam';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChatbotRasaModule } from 'angular-chat-widget-rasa';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ExchangeService } from './exchange.service'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    ChatbotRasaModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule,
    HomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
