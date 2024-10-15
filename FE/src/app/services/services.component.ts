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
      description: 'Serviciu de decopertare gresie, 30 lei/metru patrat, implica pregatirea eficienta a suprafeței pentru noi renovari.',
      price: 30,
      image: 'assets/services/decopertat.jpeg'
    },
    {
      name: 'PLACARE GRESIE/FAIANTA',
      description: 'Serviciu de placare gresie (pentru podele) și faianță (pentru pereti), 60 lei/metru pătrat, presupune instalarea placilor ceramice.',
      price: 60,
      image: 'assets/services/placare_gresie.jpeg'
    },
    {
      name: 'MANOPERA CARAMIDA APARENTA',
      description: 'Serviciu de montare cărămidă aparentă, 120 lei/metru pătrat, aducând un aspect rustic și autentic în interior sau exterior.',
      price: 120,
      image: 'assets/services/caramida_aparenta.jpeg'
    },
    {
      name: 'PLACARE MARMURA',
      description: 'Placarea cu marmură, 130 lei/metru patrat, este utilizată frecvent în băi și bucătării, pe pereti, datorită rezistenței și aspectului său luxos.',
      price: 130,
      image: 'assets/services/placare_marmura.jpeg'
    },
    {
      name: 'PLACARE GRANIT',
      description: 'Placarea cu granit, 130 lei/metru patrat, este ideală pentru spații care necesită durabilitate și rezistență la zgârieturi, pentru blaturi, podele și fațade exterioare.',
      price: 130,
      image: 'assets/services/granit.jpeg'
    },
    {
      name: 'PLACARE ONIX',
      description: 'Placarea cu onix, 130 lei/metru patrat, potrivită pentru interioare de lux, fiind adesea utilizată pentru pereți decorativi, blaturi și elemente de iluminat.',
      price: 130,
      image: 'assets/services/placare_onix.jpeg'
    },
    {
      name: 'PLACARE TRAVERTIN',
      description: 'Placarea cu travertin/ 130 lei/metru patrat, este ideală pentru spații care doresc un aspect rustic și natural, fiind utilizată frecvent în băi, terase, fațade și pardoseli.',
      price: 130,
      image: 'assets/services/travertin.jpeg'
    },
    {
      name: 'PLACARI TREPTE GRESIE',
      description: 'Placarea treptelor cu gresie, 100 lei/metru liniar, este o soluție care ofera durabilitate și o întreținere ușoară, fiind ideală pentru atât pentru interior, cât și pentru exterior.',
      price: 100,
      image: 'assets/services/placare_gresie_scari.jpeg'
    },
    {
      name: 'MONTARE PARCHET LAMINAT',
      description: 'Parchetul laminat, montarea 40 lei/metru patrat,  este o opțiune accesibilă, simplă si este ideal pentru orice tip de încăpere, de la livinguri la dormitoare.',
      price: 40,
      image: 'assets/services/parchet_laminat.jpeg'
    },
    {
      name: 'DECOPERTAT PARCHET LAMINAT',
      description: 'Decopertarea parchetului laminat este procesul de îndepărtare a acestuia, necesar pentru a permite renovarea sau înlocuirea cu un alt tip de pardoseală.',
      price: 'negociabil',
      image: 'assets/services/decopertat_parchet.jpeg'
    },
    {
      name: 'APLICARE STUCCO VENETIAN',
      description: 'Aplicarea stucco-ului venețian, 80 lei/metru patrat, este folosită pentru a crea finisaje decorative elegante pe pereți, fiind ideală pentru spații interioare de lux.',
      price: 80,
      image: 'assets/services/stucco.jpeg'
    },
    {
      name: 'APLICARE MARCOPOLO',
      description: 'Aplicarea Marcopolo, 60 lei/metru patrat, este utilizată adesea în spații comerciale și rezidențiale, datorită capacității de a reflecta lumina într-un mod spectaculos.',
      price: 60,
      image: 'assets/services/marcopolo.jpeg'
    },
    {
      name: 'APLICARE CADORO',
      description: 'Aplicarea Cadoro, 60 lei/metru patrat ofera un aspect elegant și sofisticat pereților, fiind ideală pentru interioare de lux, cum ar fi hoteluri, restaurante sau locuințe.',
      price: 60,
      image: 'assets/services/cadoro.jpeg'
    },
    {
      name: 'APLICARE MARMORINO',
      description: 'Aplicarea Marmorino, 80 lei/metru patrat, este ideală pentru a adăuga un accent artistic și modern în spațiile interioare, cum ar fi birouri, restaurante sau locuințe.',
      price: 80,
      image: 'assets/services/istinto.jpeg'
    },
    {
      name: 'MONTARE TAPET',
      description: 'Montarea tapetului, 50 lei/metru patrat, oferă o gamă variată de stiluri, culori și texturi pentru a personaliza pereții și a crea atmosfera dorită în orice cameră.',
      price: 50,
      image: 'assets/services/tapet.jpeg'
    },
    {
      name: 'MONTARE SCAFE RIGIPS',
      description: 'Montarea scafelor din rigips, 100 lei/metru liniar, este o soluție eficientă pentru a adăuga un element decorativ și elegant pe pereți și plafoane pentru spațiile interioare.',
      price: 100,
      image: 'assets/services/scafe.jpeg'
    },
    {
      name: 'EXECUTIE TAVAN RIGIPS',
      description: 'Executarea unui tavan din rigips, 45 lei/metru patrat, este o tehnică eficientă pentru a crea suprafețe netede, pentru a îmbunătăți izolația fonică și termică.',
      price: 45,
      image: 'assets/services/tavan.jpeg'
    },
    {
      name: 'MONTARE PROFILE COLTURI',
      description: 'Montarea profilelor la colțuri , 20 lei/metru liniar, este un proces esențial în finisarea pereților și tavanelor, asigurând o tranziție netedă și estetică între suprafețe.',
      price: 20,
      image: 'assets/services/coltare.jpeg'
    },
    {
      name: 'VITRINA RIGIPS PENTRU TV',
      description: 'Vitrina din rigips este o soluție modernă și elegantă pentru expunerea obiectelor decorative sau a produselor, fiind ușor de personalizat în funcție de dimensiuni și stil.',
      price: 'negociabil',
      image: 'assets/services/vitrina.jpeg'
    },
    {
      name: 'MONTARE SCAFE GRESIE/GRANIT',
      description: 'Montarea scafelor din gresie/granit, 12 lei/metru liniar, folosită pentru a adăuga detalii decorative și funcționale în diverse spații (bucătării, băi, holuri)',
      price: 12,
      image: 'assets/services/scafe.jpeg'
    },
  ]
}
