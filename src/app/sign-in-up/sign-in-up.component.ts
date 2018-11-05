import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AppBarService } from "../services/app-bar.service";
import { AuthService } from "../services/auth.service";
import { UnivProgress } from "../services/univ-progress.service";
import { MatRipple } from "@angular/material";

// import * as firebase from "firebase";

@Component({
  selector: "app-sign-in-up",
  templateUrl: "./sign-in-up.component.html",
  styleUrls: ["./sign-in-up.component.scss"]
})
export class SignInUpComponent implements OnInit {
  @ViewChild(MatRipple) ripple: MatRipple;

  constructor(
    private appBar: AppBarService,
    public router: Router,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public univProgress: UnivProgress
  ) { }

  ngOnInit() {
    this.appBar.state$.next({
      id: "auth",
      payload: null
    });

    this.afAuth.authState.subscribe(async state => {
      /**ONLY FOR TESTING REMOVE IT!!!!!!!!!!!!!!!!!  */
      // console.log(await this.afAuth.auth.getRedirectResult());
      // this.univProgress.progressState$.next({
      //   id: "authSignInClicked",
      //   payload: null
      // });
      if (state) {
        this.univProgress.progressState$.next({ id: "authSignInClicked", payload: null });
        this.auth.afterLogin(await this.afAuth.auth.getRedirectResult());
        this.univProgress.progressState$.next({ id: null, payload: null });
      }
    });
  }

/*   promptRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true,
      radius: 100
    });
    setTimeout(() => rippleRef.fadeOut(), 1000);
  } */

}
