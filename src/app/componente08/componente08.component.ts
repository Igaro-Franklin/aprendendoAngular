import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  // Variáel de média

  media:number = 8;

  // Vetor

  nomes:string[] = ['Ralf', 'Ana', 'Danilo', 'Camila']

  linguagem:string = 'css';

}
