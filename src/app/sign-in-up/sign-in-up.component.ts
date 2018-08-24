import { Component, OnInit } from "@angular/core";
import { AppBarService } from "../services/app-bar.service";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { AngularFireAuth } from "angularfire2/auth";
import { UnivProgress } from "../services/univ-progress.service";

// import * as firebase from "firebase";

@Component({
  selector: "app-sign-in-up",
  templateUrl: "./sign-in-up.component.html",
  styleUrls: ["./sign-in-up.component.scss"]
})
export class SignInUpComponent implements OnInit {
  constructor(
    private appBar: AppBarService,
    public router: Router,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public univProgress: UnivProgress
  ) {}

  ngOnInit() {
    this.appBar.state$.next({
      id: "auth",
      payload: null
    });

    this.afAuth.authState.subscribe(async state => {
      /**ONLY FOR TESTING REMOVE IT!!!!!!!!!!!!!!!!!  */
      console.log(await this.afAuth.auth.getRedirectResult());
      // this.univProgress.progressState$.next({
      //   id: "authSignInClicked",
      //   payload: null
      // });
      if (state) {
        this.auth.afterLogin(await this.afAuth.auth.getRedirectResult());
        // this.univProgress.progressState$.next({ id: null, payload: null });
      }
    });
  }
}
