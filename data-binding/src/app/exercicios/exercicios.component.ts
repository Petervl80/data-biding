import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.sass']
})
export class ExerciciosComponent {
  olaMundo: string = "olá, mundo.";

  google: string = "https://www.google.com.br/?hl=pt-BR";

  corParagrafo: string = ""
  corBackground: string = ""

  index: number = 1;

  mudaCor() {
    if(this.corParagrafo == "blue" || this.corBackground == "red"){
      this.corParagrafo = "green";
      this.corBackground = "orange";
    } else {
      this.corParagrafo = "blue";
      this.corBackground = "red";
    }
  }

  mudarTexto(index: number) {
    this.index = index;
  }

}
