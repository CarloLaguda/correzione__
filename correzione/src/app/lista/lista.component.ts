import { Component, Input } from '@angular/core';
import { Vegetables } from '../Models/vegetables.model';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input() verdura!: Vegetables

  aggiungi(nProd: HTMLInputElement)
  {
    console.log("Nome "+ this.verdura.nome + " Quantità "+ nProd.value )
  }
}
