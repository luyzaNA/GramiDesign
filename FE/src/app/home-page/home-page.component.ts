import {Component, HostListener} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatProgressBar,
    MatIcon,
    NgForOf,
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router){

  }
  services = [
    {
      name: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 100,
      image: 'assets/service-placeholder.png'
    },
    // Add more services here
    {
      name: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 200,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 300,
      image: 'assets/service-placeholder.png'
    },
  ];

  scrollToSection(sectionId: string) {
    if(this.router.url !== '/'){
      this.router.navigate(['/']);
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = sectionId != "home"? 70 : 500; // Change this value to your desired offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 500)
  }
}
