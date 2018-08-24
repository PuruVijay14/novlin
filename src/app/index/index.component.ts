import { Component, OnInit } from "@angular/core";
import { AppBarService } from "../services/app-bar.service";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  constructor(private appBar: AppBarService, public afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.appBar.state$.next({
      id: null,
      payload: null
    });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
  }
}
