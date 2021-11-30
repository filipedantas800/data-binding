import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bindin',
  templateUrl: './data-bindin.component.html',
  styleUrls: ['./data-bindin.component.css']
})
export class DataBindinComponent implements OnInit {

  url: string = 'http/loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://lorempixel.com/400/200/nature/';
  urlNova = 'http://lorempixel.com/400/200/sports/Dummy-Text/';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;
  
  nome:string = 'abc';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    // console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
    
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
