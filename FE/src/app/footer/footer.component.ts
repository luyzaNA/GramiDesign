import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {
  }

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
