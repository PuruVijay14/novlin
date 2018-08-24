import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import {
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatInputModule,
  MatProgressBarModule
} from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";
import { AppNavComponent } from "./app-nav/app-nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";
import { CreateUsernameComponent } from './create-username/create-username.component';
import { FabComponent } from './fab/fab.component';
import { UniversalProgressComponent } from './universal-progress/universal-progress.component';
import { AngularFirestoreModule } from "../../node_modules/angularfire2/firestore";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    SignInUpComponent,
    IndexComponent,
    CreateUsernameComponent,
    FabComponent,
    UniversalProgressComponent
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
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatRippleModule,
    MatInputModule,
    MatProgressBarModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
