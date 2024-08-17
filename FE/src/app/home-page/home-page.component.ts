import {Component, HostListener} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatProgressBar,
    MatIcon,
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
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

  }
}
