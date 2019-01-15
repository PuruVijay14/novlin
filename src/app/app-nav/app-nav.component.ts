import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material";
import { Router } from "@angular/router";
import { appearence } from "../animations/app-bar";
import { fadeAnimation } from "../animations/routing";
import { AppBarService } from "../services/app-bar.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./app-nav.component.html",
  styleUrls: ["./app-nav.component.scss"],
  animations: [appearence, fadeAnimation]
})
export class AppNavComponent implements OnInit {
  position = 0;
  appBarState = "hidden";
  /**Icon on navbar */
  icon = "menu";

  /** Whether the icon is hidden */
  iconHidden = false;

  /** title of toolbar */
  title = "Welcome!";

  /** Tooltip text */
  tooltipText = "Site menu!";

  /** Drawer */
  @ViewChild("drawer") drawer: MatDrawer;

  /** Title row */
  @ViewChild("titleRow") titleRowRef: ElementRef;

  /** App Bar */
  @ViewChild("appBar") appBarRef: ElementRef;

  styles = {
    appBar: {
    }
  };

  fabExtended = false;

  sidenavOpened = true;

  fullPageRippleStyle = {
    left: 0,
    top: 0,
    display: 'none',
    transform: 'scale(1, 1)'
  };

  @ViewChild('FullPageRipple') fullPageRippleElement: ElementRef;

  constructor(
    public appBarService: AppBarService,
    public router: Router,
    private authService: AuthService,
    public breakpointObserver: BreakpointObserver,
    elementRef: ElementRef
  ) { }

  handleNav() {
    // App bar
    const appBar = document.querySelector("#app-bar");

    const firstRowHeight = this.titleRowRef.nativeElement.offsetHeight;
    const appBarHeight = appBar.clientHeight;

    // this.styles.appBar["bottom.px"] = -1 * (appBarHeight - firstRowHeight);

    this.iconHidden = this.iconHidden ? false : true;
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(Breakpoints.HandsetPortrait)
      .subscribe((state: BreakpointState) => {
        this.sidenavOpened = state.matches ? false : true;
      }).unsubscribe();

    this.appBarState = "visible";
    this.adaptiveNavbar();
    this.handleNav();
    this.adaptiveAction();
  }

  toggleToolbar($event: Event) {
    const scroll = $event.srcElement.scrollTop;
    let scrollDirection;
    scrollDirection = scroll > this.position ? "down" : "up";

    if (scrollDirection === "down") {
      this.appBarState = "hidden";
    } else {
      this.appBarState = "visible";
    }
    /** Comes at the last of function */
    this.position = scroll;
  }

  async adaptiveAction() {
    // this.appBarService.state$.subscribe(console.log);
    // return await this.appBarService.state$.subscribe(data => {
    //   switch (data.id) {
    //     case "auth":
    //       this.backToHome();
    //       break;

    //     default:
    //       this.handleNav();
    //       break;
    //   }
    // });
  }
  backToHome() {
    this.router.navigate([""]);
  }

  /** Manages the working of navbar based on its state */
  adaptiveNavbar(): void {
    this.appBarService.state$.subscribe(data => {
      switch (data.id) {
        case "auth":
          /** Menu icon --> Back icon
           * Text --> Tap the icon
           */
          this.icon = "arrow_back_rounded";
          this.title = "Click on the icon";
          this.tooltipText = "Back to home";
          break;

        case null:
          this.icon = "menu";
          this.title = "Welcome!";
          this.tooltipText = "Site Menu";
          break;
      }
    });
  }

  OpenFullPageRipple() {
    this.fullPageRippleStyle.display = 'block';
    /* var i = 2;
    setInterval(() => {
      requestAnimationFrame(() =>
        this.fullPageRippleStyle.transform = `scale(${i}, ${i})`;
      i **= 2;
    }, 1); */
  }

}
