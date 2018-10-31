import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { AppNavComponent } from "./app-nav/app-nav.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FabComponent } from './fab/fab.component';
import { IndexComponent } from "./index/index.component";
import { MaterialModule } from "./modules/material/material.module";
import { UniversalProgressComponent } from './universal-progress/universal-progress.component';
import { SharedModuleModule } from "./modules/shared-module/shared-module.module";

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    IndexComponent,
    FabComponent,
    UniversalProgressComponent,
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
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    SharedModuleModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
