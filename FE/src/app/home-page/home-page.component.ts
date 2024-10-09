import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {ImageService} from "../shared/imagesPathFromJson.service";
import {HttpClientModule} from "@angular/common/http";

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
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router, private imageService: ImageService){

  }
  services = [
    {
      name: 'DECOPERTAT GRESIE/FAIANTA',
      description: 'Serviciu de decopertare gresie, 30 lei/metru pătrat, pregătire eficientă a suprafeței pentru noi renovări.',
      price: 30,
      image: 'assets/services/decopertat.jpeg'
    },
    // Add more services here
    {
      name: 'PLACARE GRESIE/FAIANTA',
      description: 'Serviciu de placare gresie și faianță, 90 lei/metru pătrat, oferind un design elegant și durabil pentru orice spațiu.',
      price: 90,
      image: 'assets/services/placare_gresie.jpeg'
    },
    {
      name: 'MANOPERA CARAMIDA APARENTA',
      description: '\n' +
        'Serviciu de montare cărămidă aparentă, 120 lei/metru pătrat, aducând un aspect rustic și autentic în interior sau exterior.',
      price: 120,
      image: 'assets/services/caramida_aparenta.jpeg'
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

  images: any[] = [];

  ngOnInit() {
    this.imageService.getImagePaths().subscribe(data => {

      const ratio075 = data.images.filter((item: any) => item.ratio === 0.75);
      const ratio2 = data.images.filter((item: any) => item.ratio === 2);

      const result= [];
      const maxLength = Math.max(ratio075.length, ratio2.length);
      const pattern = [0.75, 2, 0.75, 2,
        2, 0.75, 2, 0.75];
      let ratio075Index = 0;
      let ratio2Index = 0;

      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === 0.75 && ratio075Index < ratio075.length) {
          result.push(ratio075[ratio075Index]);
          ratio075Index++;
        } else if (pattern[i] === 2 && ratio2Index < ratio2.length) {
          result.push(ratio2[ratio2Index]);
          ratio2Index++;
        }
      }

      // If there are remaining items, continue the pattern
      while (ratio075Index < ratio075.length || ratio2Index < ratio2.length) {
        for (let i = 0; i < pattern.length; i++) {
          if (pattern[i] === 0.75 && ratio075Index < ratio075.length) {
            result.push(ratio075[ratio075Index]);
            ratio075Index++;
          } else if (pattern[i] === 2 && ratio2Index < ratio2.length) {
            result.push(ratio2[ratio2Index]);
            ratio2Index++;
          }
          // Break the loop if both indices reach their limits
          if (ratio075Index >= ratio075.length && ratio2Index >= ratio2.length) {
            break;
          }
        }
      }




      this.images = result;
      console.log(this.images);
      console.log(this.colNo)
    });
  }

  get colNo(): number[] {
    return new Array(Math.floor((this.images.length > 12 ? 12 : this.images.length)  / 4)).fill(null).map((_, i) => i + 1);
  }
}
