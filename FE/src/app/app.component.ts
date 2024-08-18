import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavigationBarComponent} from "./navigation-bar/navigation-bar.component";
import { TranslateService } from '@ngx-translate/core';
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationBarComponent, MatIcon, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FE';

  constructor(private translateService: TranslateService) {
    this.translateService.use('ro')
  }
}
