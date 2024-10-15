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
  isAtBottom: boolean = false;

  constructor(private router: Router, private imageService: ImageService) {

  }

  services = [
    {
      name: 'PLACARE GRANIT',
      description: 'Placarea cu granit, 130 lei/metru patrat, este ideală pentru spații care necesită durabilitate și rezistență la zgârieturi, pentru blaturi, podele și fațade exterioare.',
      price: 130,
      image: 'assets/services/granit.jpeg'
    },
    {
      name: 'APLICARE STUCCO VENETIAN',
      description: 'Aplicarea stucco-ului venețian, 80 lei/metru patrat, este folosită pentru a crea finisaje decorative elegante pe pereți, fiind ideală pentru spații interioare de lux.',
      price: 80,
      image: 'assets/services/stucco.jpeg'
    },
    {
      name: 'PLACARI TREPTE GRESIE',
      description: 'Placarea treptelor cu gresie, 100 lei/metru liniar, este o soluție care ofera durabilitate și o întreținere ușoară, fiind ideală pentru atât pentru interior, cât și pentru exterior.',
      price: 100,
      image: 'assets/services/placare_gresie_scari.jpeg'
    },
  ];

  scrollToSection(sectionId: string) {
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = sectionId != "home" ? 70 : 500; // Change this value to your desired offset
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

      const result = [];
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
    });
    this.checkScrollPosition();

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if document height is at least 1080px and user has scrolled to the bottom
    if ((scrollTop + windowHeight + 1080) >= documentHeight) {
      this.isAtBottom = true;
    } else {
      this.isAtBottom = false;
    }
  }


  get colNo(): number[] {
    return new Array(Math.floor((this.images.length > 12 ? 12 : this.images.length) / 4)).fill(null).map((_, i) => i + 1);
  }
}
