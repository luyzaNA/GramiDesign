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
      name: 'PLACARE GRESIE/FAIANTA',
      description: 'Serviciu de placare gresie (pentru podele) si faianta (pentru pereti), 60 lei/metru patrat, presupune instalarea placilor ceramice.',
      price: 60,
      image: 'assets/services/placare_gresie.jpeg'
    },
    {
      name: 'PLACARE TREPTE GRESIE',
      description: 'Placarea treptelor cu gresie, 100 lei/metru liniar, este o solutie care ofera durabilitate si o intretinere usoara, fiind ideala pentru atat pentru interior, cat si pentru exterior.',
      price: 100,
      image: 'assets/services/placare_gresie_scari.jpeg'
    },
    {
      name: 'DECOPERTAT GRESIE/FAIANTA',
      description: 'Serviciu de decopertare gresie, 30 lei/metru patrat, implica pregatirea eficienta a suprafetei pentru noi renovari.',
      price: 30,
      image: 'assets/services/decopertat.jpeg'
    },
    {
      name: 'MONTARE PLINTA GRESIE/GRANIT',
      description: 'Montarea plitelor pentru gresie/granit, 12 lei/metru liniar, contribuie la o tranziție elegantă între podea și perete, completând designul interior.',
      price: 12,
      image: 'assets/services/scafe_gresie.JPG'
    },
    {
      name: 'PLACARE GRANIT',
      description: 'Placarea cu granit, 130 lei/metru patrat, este ideala pentru spatii care necesita durabilitate si rezistenta la zgarieturi, pentru blaturi, podele si fatade exterioare.',
      price: 130,
      image: 'assets/services/granit.jpeg'
    },
    {
      name: 'PLACARE MARMURA',
      description: 'Placarea cu marmura, 130 lei/metru patrat, este utilizata frecvent in bai si bucatarii, pe pereti, datorita rezistentei si aspectului sau luxos.',
      price: 130,
      image: 'assets/services/placare_marmura.jpeg'
    },

    {
      name: 'PLACARE ONIX',
      description: 'Placarea cu onix, 130 lei/metru patrat, potrivita pentru interioare de lux, fiind adesea utilizata pentru pereti decorativi, blaturi si elemente de iluminat.',
      price: 130,
      image: 'assets/services/placare_onix.jpeg'
    },
    {
      name: 'PLACARE TRAVERTIN',
      description: 'Placarea cu travertin/ 130 lei/metru patrat, este ideala pentru spatii care doresc un aspect rustic si natural, fiind utilizata frecvent in bai, terase, fatade si pardoseli.',
      price: 130,
      image: 'assets/services/travertin.jpeg'
    },
    {
      name: 'MONTARE PARCHET LAMINAT',
      description: 'Parchetul laminat, montarea 40 lei/metru patrat, este o optiune accesibila, simpla si este ideal pentru orice tip de incapere, de la livinguri la dormitoare.',
      price: 40,
      image: 'assets/services/parchet_laminat.jpeg'
    },
    {
      name: 'DECOPERTAT PARCHET LAMINAT',
      description: 'Decopertarea parchetului laminat este procesul de indepartare a acestuia, necesar pentru a permite renovarea sau inlocuirea cu un alt tip de pardoseala.',
      price: 'negociabil',
      image: 'assets/services/decopertat_parchet.jpeg'
    },
    {
      name: 'MANOPERA CARAMIDA APARENTA',
      description: 'Serviciu de montare caramida aparenta, 120 lei/metru patrat, aducand un aspect rustic si autentic in interior sau exterior.',
      price: 120,
      image: 'assets/services/caramida_aparenta.jpeg'
    },
    {
      name: 'APLICARE STUCCO VENETIAN',
      description: 'Aplicarea stucco-ului venetian, 80 lei/metru patrat, este folosita pentru a crea finisaje decorative elegante pe pereti, fiind ideala pentru spatii interioare de lux.',
      price: 80,
      image: 'assets/services/stucco.jpeg'
    },
    {
      name: 'APLICARE MARCOPOLO',
      description: 'Aplicarea Marcopolo, 60 lei/metru patrat, este utilizata adesea in spatii comerciale si rezidentiale, datorita capacitatii de a reflecta lumina intr-un mod spectaculos.',
      price: 60,
      image: 'assets/services/marcopolo.jpg'
    },
    {
      name: 'APLICARE CADORO',
      description: 'Aplicarea Cadoro, 60 lei/metru patrat ofera un aspect elegant si sofisticat peretilor, fiind ideala pentru interioare de lux, cum ar fi hoteluri, restaurante sau locuinte.',
      price: 60,
      image: 'assets/services/cadoro.jpeg'
    },
    {
      name: 'APLICARE MARMORINO',
      description: 'Aplicarea Marmorino, 80 lei/metru patrat, este ideala pentru a adauga un accent artistic si modern in spatiile interioare, cum ar fi birouri, restaurante sau locuinte.',
      price: 80,
      image: 'assets/services/istinto.jpeg'
    },
    {
      name: 'MONTARE TAPET',
      description: 'Montarea tapetului, 50 lei/metru patrat, ofera o gama variata de stiluri, culori si texturi pentru a personaliza peretii si a crea atmosfera dorita in orice camera.',
      price: 50,
      image: 'assets/services/tapet.jpeg'
    },
    {
      name: 'MONTARE SCAFE RIGIPS',
      description: 'Montarea scafelor din rigips, 100 lei/metru liniar, este o solutie eficienta pentru a adauga un element decorativ si elegant pe pereti si plafoane pentru spatiile interioare.',
      price: 100,
      image: 'assets/services/scafe.jpeg'
    },
    {
      name: 'EXECUTIE TAVAN RIGIPS',
      description: 'Executarea unui tavan din rigips, 45 lei/metru patrat, este o tehnica eficienta pentru a crea suprafete netede, pentru a imbunatati izolatia fonica si termica.',
      price: 45,
      image: 'assets/services/tavan.jpeg'
    },
    {
      name: 'MONTARE PROFILE COLTURI',
      description: 'Montarea profilelor la colturi, 20 lei/metru liniar, este un proces esential in finisarea peretilor si tavanelor, asigurand o tranzitie neteda si estetica intre suprafete.',
      price: 20,
      image: 'assets/services/coltare.jpeg'
    },
    {
      name: 'VITRINA RIGIPS PENTRU TV',
      description: 'Vitrina din rigips este o solutie moderna si eleganta pentru expunerea obiectelor decorative sau a produselor, fiind usor de personalizat in functie de dimensiuni si stil.',
      price: 'negociabil',
      image: 'assets/services/vitrina.jpeg'
    }
  ]
}
