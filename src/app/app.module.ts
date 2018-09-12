import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule, MatIconModule, MatInputModule, MatListModule, MatProgressBarModule, MatRippleModule, MatSidenavModule, MatToolbarModule, MatTooltipModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AppNavComponent } from "./app-nav/app-nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CreateUsernameComponent } from './create-username/create-username.component';
import { FabComponent } from './fab/fab.component';
import { IndexComponent } from "./index/index.component";
import { InterestsSignupComponent } from './interests-signup/interests-signup.component';
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";
import { UniversalProgressComponent } from './universal-progress/universal-progress.component';

import { MdcButtonModule, MdcFabModule, MdcIconButtonModule } from "@angular-mdc/web";

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    SignInUpComponent,
    IndexComponent,
    CreateUsernameComponent,
    FabComponent,
    UniversalProgressComponent,
    InterestsSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatRippleModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    ReactiveFormsModule,
    FormsModule,
    MdcButtonModule,
    MdcFabModule,
    MdcIconButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
