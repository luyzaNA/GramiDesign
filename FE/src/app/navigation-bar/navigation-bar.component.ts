import { Component } from '@angular/core';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {TranslateService} from "@ngx-translate/core";
import {AppTranslationModule} from "../Translator/TranslateModule";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
    imports: [
        MatToolbar,
        MatToolbarModule,
        MatIcon,
        AppTranslationModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
    currentLanguage: string = 'en';
    constructor(private translateService: TranslateService) {
    }

    changeLanguage(value: any) {
        const language = value.target.value;
        this.translateService
            .use(language);
    }
}
