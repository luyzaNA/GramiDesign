import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {TranslateService} from "@ngx-translate/core";
import {AppTranslationModule} from "../Translator/TranslateModule";
import {NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatIcon,
    AppTranslationModule,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  currentLanguage: string = "ro";

  constructor(private translateService: TranslateService, private router: Router, private activeRoute: ActivatedRoute) {
    this.currentLanguage = this.translateService.currentLang;
  }

  changeLanguage(value: any) {
    const language = value.target.value;
    this.translateService
      .use(language);
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
