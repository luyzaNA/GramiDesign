import {Component, HostListener, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {ImageService} from "../shared/imagesPathFromJson.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    NgIf,
    NgClass,
    HttpClientModule
  ],
  providers: [ImageService],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: any[] = [];

  constructor(private imageService: ImageService) {
  }

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
    return new Array(this.images.length / 4).fill(null).map((_, i) => i + 1);
  }
}
