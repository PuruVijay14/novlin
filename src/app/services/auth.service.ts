import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from "firebase/app";
import { Router } from "@angular/router";
import { UserCredential } from "@firebase/auth-types";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afStore: AngularFirestore,
    private http: HttpClient
  ) {}

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
  }
  async afterLogin(data: UserCredential) {
    this.setLocalData(data);
    // const params = new HttpParams().set("uid", data.user.uid);
    // this.http
    //   .get(`${environment.backendURL}/setUpUser`, {
    //     params
    //   })
    //   .subscribe(console.log);
    if (data.additionalUserInfo.isNewUser) {
      /** Redirect the user to create the username */
      this.router.navigate(["createusername"]);
    } else {
      this.router.navigate([""]);
    }
  }
}
