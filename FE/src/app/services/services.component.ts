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
      description: 'Serviciu de placare gresie (pentru podele) și faianță (pentru pereti), 90 lei/metru pătrat, presupune instalarea placilor ceramice.',
      price: 90,
      image: 'assets/services/placare_gresie.jpeg'
    },
    {
      name: 'MANOPERA CARAMIDA APARENTA',
      description: 'Serviciu de montare cărămidă aparentă, 120 lei/metru pătrat, aducând un aspect rustic și autentic în interior sau exterior.',
      price: 120,
      image: 'assets/services/caramida_aparenta.jpeg'
    },
    {
      name: 'MANOPERA PLACARE MARMURA',
      description: 'Serviciu de placare cu marmură, 130 lei/metru pătrat, oferind un aspect luxurious și sofisticat, ideal pentru orice spațiu elegant.',
      price: 130,
      image: 'assets/services/placare_man_marmura.jpg'
    },
    {
      name: 'MANOPERA PLACARE GRANIT',
      description: 'Serviciu de placare cu granit, 130 lei/metru pătrat, oferind robustețe și estetică superioară, ideal pentru proiecte deosebite și durabile.',
      price: 130,
      image: 'assets/services/man_granit.jpeg'
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
      name: 'MONTARE PARCHET LAMINAT',
      description: 'Montarea parchetului laminat cu plintă, 40 lei/metru patrat, implică așezarea plăcilor de parchet pe podea și fixarea plintelor la baza pereților pentru a ascunde rosturile și a oferi un aspect finisat.',
      price: 40,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'DECOPERTAT PARCHET LAMINAT',
      description: 'Decopertarea parchetului laminat implică îndepărtarea plintelor, scoaterea plăcilor de parchet și curățarea suprafeței pentru a pregăti podeaua pentru un nou strat de acoperire.',
      price: 'negociabil',
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'APLICARE STUCCO VENETIAN',
      description: 'Aplicarea stucco venetian, 80 lei/metru patrat, presupune aplicarea unui strat de bază de tencuială, urmat de mai multe straturi subțiri de stucco lustruit și finisat pentru a obține un efect de marmură lucioasă și sofisticată.',
      price: 80,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'APLICARE MARCOPOLO',
      description: 'Aplicarea Marcopolo, 60 lei/metru patrat, implică aplicarea unui strat de bază, urmat de un strat de vopsea decorativă texturată cu unelte speciale pentru a crea un efect de suprafață perlată, metalizată și elegantă.',
      price: 60,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'APLICARE CADORO',
      description: 'Aplicarea Cadoro, 60 lei/metru patrat, constă în aplicarea unei vopsele decorative pe bază de apă, cu ajutorul unei mistrii sau pensule, pentru a crea un efect mătăsos, cu reflexii irizate și texturi fine pe pereți.',
      price: 60,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'APLICARE ISTINTO',
      description: 'Aplicarea Istinto, 80 lei/metru patrat, implică utilizarea unei tencuieli decorative pe bază de var, care se aplică cu o mistrie și alte unelte speciale pentru a crea texturi complexe și efecte tridimensionale, imitând piatra naturală sau alte materiale.',
      price: 80,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MONTARE TAPET',
      description: 'Montarea tapetului, 50 lei/metru patrat, implică pregătirea pereților, tăierea fâșiilor, aplicarea adezivului și lipirea acestora pentru un finisaj uniform.',
      price: 50,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MONTARE SCAFE RIGIPS',
      description: 'Montarea scafelor din rigips, 50 lei/metru liniar, presupune fixarea profilului metalic pe tavan, atașarea panourilor de rigips și finisarea îmbinărilor pentru un aspect uniform.',
      price: 50,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MONTARE SCAFE RIGIPS',
      description: 'Montarea scafelor din rigips, 50 lei/metru liniar, presupune fixarea profilului metalic pe tavan, atașarea panourilor de rigips și finisarea îmbinărilor pentru un aspect uniform.',
      price: 50,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'EXECUTIE TAVAN RIGIPS',
      description: 'Executia tavanului din rigips,45 lei/metru patrat, include crearea structurii de susținere și montarea plăcilor pentru un finisaj estetic și durabil.',
      price: 45,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'MONTARE PROFILE COLTURI',
      description: 'Montarea profililor la colturi de rigips, 20 lei/metru liniar, pentru colțuri implică tăierea profilului la dimensiunea dorită, fixarea acestuia pe colțurile pereților cu șuruburi sau adeziv, și asigurarea unei aliniere corecte.',
      price: 20,
      image: 'assets/service-placeholder.png'
    },
    {
      name: 'VITRINA RIGIPS PENTRU TV',
      description: 'Crearea unei vitrine din rigips pentru TV, cu pretul diferit in functie de model, implică proiectarea și construirea unei structuri din rigips care să integreze televizorul și să ofere spațiu pentru accesori.',
      price: '-',
      image: 'assets/service-placeholder.png'
    }
  ]
}
