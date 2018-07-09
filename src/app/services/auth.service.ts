import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { UserCredential } from "@firebase/auth-types";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async signIn() {
    await this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    try {
      const data = this.afAuth.auth.signInWithRedirect(
        new firebase.auth.GoogleAuthProvider()
      );

      /**______________________ONLY FOR TESTING  ===> REMOVE________________________ */
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  private setLocalData(data) {
    localStorage.setItem("uid", data.user.uid);
    localStorage.setItem("name", data.user.displayName);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("photo", data.user.photoURL);
    localStorage.setItem("newUser", data.additionalUserInfo.isNewUser);
    localStorage.setItem("emailVerified", data.user.emailVerified);
  }

  afterLogin(data: UserCredential) {
    this.setLocalData(data);

    if (data.additionalUserInfo.isNewUser) {
      /** Redirect the user to create the username */
      this.router.navigate(["createusername"]);
    } else {
      this.router.navigate([""]);
    }
  }
}
