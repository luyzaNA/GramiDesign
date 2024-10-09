import {Component, HostListener} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import { TranslateService } from '@ngx-translate/core';
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "./footer/footer.component";
import {ImageService} from "./shared/imagesPathFromJson.service";

@Component({
  selector: 'app-root',
  providers: [ImageService],
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, MatIcon, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FE';

  constructor(private translateService: TranslateService,private router: Router) {
    this.translateService.use('ro');

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Scroll to top after each navigation
        window.scrollTo(0, 0);
      }
    });
  }



  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const target = event.target as Document;
    if (!target.scrollingElement) {
      return;
    }

    const scrollingElement = target.scrollingElement as HTMLElement;
    const viewportHeight = window.innerHeight;
    const scrollfeature = scrollingElement.scrollTop;
    const elementsToTrackRight = document.querySelectorAll('.element-to-track');
    const elementsToTrackLeft = document.querySelectorAll('.element-to-track-in');
    const elementsToTrackScaleInCenter = document.querySelectorAll('.scale-in-center-tracker');
    const elementsToTrackPuffInCenter = document.querySelectorAll('.elm-track-puff-in-center');

    elementsToTrackRight.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollfeature;
      const elementBottom = elementTop + element.clientHeight;
      const isInMiddle = elementTop < (scrollfeature + viewportHeight) && elementBottom > (scrollfeature + viewportHeight / 2.6);

      if (isInMiddle && !element.classList.contains('slide-in-left')) {
        element.classList.remove('elm-track-viz');
        element.classList.add('slide-in-left');
      }
    });

    elementsToTrackLeft.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollfeature;
      const elementBottom = elementTop + element.clientHeight;
      const isInMiddle = elementTop < (scrollfeature + viewportHeight / 1.2) && elementBottom > (scrollfeature + viewportHeight / 3.3);

      if (isInMiddle && !element.classList.contains('fade-in')) {
        element.classList.remove('elm-track-viz');
        element.classList.add('fade-in');
      }
    });
    elementsToTrackScaleInCenter.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollfeature;
      const elementBottom = elementTop + element.clientHeight;
      const isInMiddle = elementTop < (scrollfeature + viewportHeight / 1.2) && elementBottom > (scrollfeature + viewportHeight / 3.3);

      if (isInMiddle && !element.classList.contains('scale-in-center')) {
        element.classList.remove('elm-track-viz');
        element.classList.add('scale-in-center');
      }
    });

    elementsToTrackPuffInCenter.forEach(element => {
      const elementTop = element.getBoundingClientRect().top + scrollfeature;
      const elementBottom = elementTop + element.clientHeight;
      const isInMiddle = elementTop < (scrollfeature + viewportHeight / 1.2) && elementBottom > (scrollfeature + viewportHeight / 3.3);

      if (isInMiddle && !element.classList.contains('puff-in-center')) {
        element.classList.remove('elm-track-viz');
        element.classList.add('puff-in-center');
      }
    });

  }
}
