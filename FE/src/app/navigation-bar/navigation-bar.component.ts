import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {TranslateService} from "@ngx-translate/core";
import {AppTranslationModule} from "../Translator/TranslateModule";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatIcon,
    AppTranslationModule,
    NgOptimizedImage
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
    currentLanguage: string = "ro";
    constructor(private translateService: TranslateService) {
      this.currentLanguage = this.translateService.currentLang;
    }

  changeLanguage(value: any) {
        const language = value.target.value;
        this.translateService
            .use(language);
    }
}
