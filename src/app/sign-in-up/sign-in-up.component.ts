import { Component, OnInit } from "@angular/core";
import { AppBarService } from "../services/app-bar.service";

@Component({
  selector: "app-sign-in-up",
  templateUrl: "./sign-in-up.component.html",
  styleUrls: ["./sign-in-up.component.scss"]
})
export class SignInUpComponent implements OnInit {
  constructor(private appBar: AppBarService) {}

  ngOnInit() {
    this.appBar.state$.next({
      id: "auth",
      payload: null
    });
  }
}
