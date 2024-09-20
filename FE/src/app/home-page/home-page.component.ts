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
      name: 'DECOPERTAT GRESIE/FAIANTA',
      description: 'Serviciu de decopertare gresie, 30 lei/metru pătrat, pregătire eficientă a suprafeței pentru noi renovări.',
      price: 30,
      image: 'assets/service-placeholder.png'
    },
    // Add more services here
    {
      name: 'PLACARE GRESIE/FAIANTA',
      description: 'Serviciu de placare gresie și faianță, 90 lei/metru pătrat, oferind un design elegant și durabil pentru orice spațiu.',
      price: 90,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MANOPERA CARAMIDA APARENTA',
      description: '\n' +
        'Serviciu de montare cărămidă aparentă, 120 lei/metru pătrat, aducând un aspect rustic și autentic în interior sau exterior.',
      price: 120,
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
