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
      name: 'DECOPERTAT GRESIE/FAIANTA',
      description: 'Serviciu de decopertare gresie, 30 lei/metru pătrat, pregătire eficientă a suprafeței pentru noi renovări.',
      price: 30,
      image: 'assets/service-placeholder.png'
    },
    // Add more services here
    {
      name: 'PLACARE GRESIE/FAIANTA',
      description: 'Serviciu de placare gresie și faianță, 90 lei/metru pătrat, oferind un design elegant și durabil pentru orice spațiu.',
      price: 90,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MANOPERA CARAMIDA APARENTA',
      description: '\n' +
        'Serviciu de montare cărămidă aparentă, 120 lei/metru pătrat, aducând un aspect rustic și autentic în interior sau exterior.',
      price: 120,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MANOPERA PLACARE MARMURA',
      description: 'Serviciu de placare cu marmură, 130 lei/metru pătrat, oferind un aspect luxurious și sofisticat, ideal pentru orice spațiu elegant.',
      price: 130,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MANOPERA PLACARE GRANIT',
      description: 'Serviciu de placare cu granit, 130 lei/metru pătrat, oferind robustețe și estetică superioară, ideal pentru proiecte deosebite și durabile.',
      price: 130,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MANOPERA PLACARE ONIX',
      description: 'Serviciu de placare cu onix, 30 lei/metru pătrat, aducând un strop de lux și transparență în orice ambient, perfect pentru efecte decorative unice.',
      price: 130,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MANOPERA PLACARE TRAVERTIN',
      description: 'Serviciu de placare cu travertin, 30 lei/metru pătrat, aducând un aspect natural și cald, ',
      price: 130,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'PLACARI TREPTE GRESIE',
      description: 'Placarea treptelor cu gresie, 100 lei/metru liniar, presupune pregătirea suprafeței, tăierea și montarea plăcilor de gresie, asigurând un finisaj uniform și estetic, cu atenție la detalii pentru siguranță și durabilitate.',
      price: 100,
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
