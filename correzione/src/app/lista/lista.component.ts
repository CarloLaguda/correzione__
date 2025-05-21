import { Component, Input } from '@angular/core';
import { Vegetables } from '../Models/vegetables.model';
import { CartProduct } from '../Models/cartProduct.model';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input() verdura!: Vegetables
  @Input() cartProdu!: CartProduct[];
  aggiungi(nProd: HTMLInputElement)
  {
    console.log("Nome "+ this.verdura.nome + " Quantità "+ nProd.value )
    this.cartProdu.push(new CartProduct(this.verdura.nome, this.verdura.descrizione, this.verdura.prezzo, nProd.value))
  }//hhaha
}
