import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async signIn() {
    await this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    try {
      const data = await this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );

      /**______________________ONLY FOR TESTING  ===> REMOVE________________________ */
      console.log(data);

      /** Set the localstorages */
      this.setLocalData(data);
      /** Redirect the user to create the username */
      this.router.navigate(["createusername"]);
      if (data.additionalUserInfo.isNewUser) {
        // The lad just signed up, redirect to user selection
      }
    } catch (error) {
      console.error(error);
    }
  }

  private setLocalData(data: any) {
    localStorage.setItem("uid", data.user.uid);
    localStorage.setItem("name", data.user.displayName);
    localStorage.setItem("email", data.user.email);
    localStorage.setItem("photo", data.user.photoURL);
    localStorage.setItem("newUser", data.additionalUserInfo.isNewUser);
    localStorage.setItem("emailVerified", data.user.emailVerified);
  }
}
