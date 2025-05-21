import { Component, Input } from '@angular/core';
import { CartProduct } from '../Models/cartProduct.model';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() carts!: CartProduct
}
