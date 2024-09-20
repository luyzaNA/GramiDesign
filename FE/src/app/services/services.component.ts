import {Component} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      name: 'Service 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 100,
      image: 'assets/service-placeholder.png'
    },
    // Add more services here
    {
      name: 'Service 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 200,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 300,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 400,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 500,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 600,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 700,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 800,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      price: 900,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'Service 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
      price: 1000,
      image: 'assets/service-placeholder.png'
    },
  ]
}
