import { Component, OnInit } from "@angular/core";
import { UnivProgress } from "../services/univ-progress.service";

@Component({
  selector: "app-universal-progress",
  templateUrl: "./universal-progress.component.html",
  styleUrls: ["./universal-progress.component.scss"]
})
export class UniversalProgressComponent implements OnInit {
  constructor(private univProgress: UnivProgress) {}

  hidden = true;

  ngOnInit() {
    this.chameleonMode();
  }

  chameleonMode() {
    this.univProgress.progressState$.subscribe(data => {
      switch (data.id) {
        case "authSignInClicked":
        this.hidden = false;
          break;

        default:
        this.hidden = true;
          break;
      }
    });
  }
}
