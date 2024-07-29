import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  // Variável para imagem
  imagem:string = 'https://www.portalriomaina.com/wp-content/uploads/2022/05/dia-do-sol.jpg';

  // Função para alterar a imagem
  alterarImagem(){
    if(this.imagem === "https://www.portalriomaina.com/wp-content/uploads/2022/05/dia-do-sol.jpg"){
      this.imagem = 'https://static.vecteezy.com/ti/fotos-gratis/t2/8440112-paisagem-noite-em-fprest-com-lua-cheia-e-nuvens-foto.jpg';
    }else{
      this.imagem = 'https://www.portalriomaina.com/wp-content/uploads/2022/05/dia-do-sol.jpg';
    }
  }
}
