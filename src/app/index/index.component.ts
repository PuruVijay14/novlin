import { Component, OnInit } from "@angular/core";
import { AppBarService } from "../services/app-bar.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})
export class IndexComponent implements OnInit {
  constructor(private appBar: AppBarService) {}

  ngOnInit() {
    this.appBar.state$.next({
      id: null,
      payload: null
    });
  }
}
