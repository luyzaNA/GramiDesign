import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private jsonUrl = '../assets/images/images-paths.json'

  constructor(private http: HttpClient) {}

  getImagePaths(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
