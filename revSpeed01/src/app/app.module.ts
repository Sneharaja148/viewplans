import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { ViewSubscriptionsComponent } from './subscriptions/view-subscriptions/view-subscriptions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NewLoginComponent } from './authentication/new-login/new-login.component';
import { HomeComponent } from './authentication/home/home.component';
import { HeaderComponent } from './authentication/header/header.component';
import { PasswordComponent } from './authentication/password/password.component';
import { IdentifyComponent } from './authentication/password/identify/identify.component';
import { SmsCodeComponent } from './authentication/password/sms-code/sms-code.component';
import { SetPasswordComponent } from './authentication/password/set-password/set-password.component';
import { NewHomeComponent } from './authentication/new-home/new-home.component';
import { TagsComponent } from './authentication/tags/tags.component';
import { SearchComponent } from './authentication/search/search.component';
import { FootComponent } from './authentication/foot/foot.component';
import { ReviewComponent } from './authentication/review/review.component';
import { SliderComponent } from './authentication/slider/slider.component';
import { BasicPlanComponent } from './basic-plan/basic-plan.component';
import { BasicPlanService } from './basic-plan/basic-plan.service';
import { RechargeDialogComponent } from './recharge-dialog/recharge-dialog.component';
import { CommonModule } from '@angular/common';
import { MatCardContent } from '@angular/material/card';





@NgModule({
  declarations: [

   
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ViewSubscriptionsComponent,
    NewLoginComponent,
    HomeComponent,
    HeaderComponent,
    PasswordComponent,
    IdentifyComponent,
    SmsCodeComponent,
    SetPasswordComponent,
    NewHomeComponent,
    TagsComponent,
    SearchComponent,
    FootComponent,
    ReviewComponent,
    SliderComponent,
    BasicPlanService,
    RechargeDialogComponent,
    BasicPlanComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule ,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    NgModule,
    // NgbModule,
    CommonModule,
    MatCardContent,
    
  ],
  providers: [provideHttpClient(withFetch()),
   
    provideClientHydration()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
