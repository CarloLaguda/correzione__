import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { ListaComponent } from './lista/lista.component';
import { Vegetables } from './Models/vegetables.model';
import { CartProduct } from './Models/cartProduct.model';
import { DetailsComponent } from './details/details.component';
import { CarrelloComponent } from './carrello/carrello.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaComponent, DetailsComponent, CarrelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'correzione';

  loading!: boolean
  obs!: Observable<Vegetables[]>
  data!: object
  http: HttpClient

  vettVerd: Vegetables[] = []
  cartPro: CartProduct[] =[]
  
  constructor(http:HttpClient){this.http = http}

  makeChiamata(){
    this.loading = true
    this.obs = this.http.get<Vegetables[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure")
    this.obs.subscribe(this.getData)
  }

  getData = (d: Vegetables[]) =>
  {
    this.vettVerd = d
    console.log(this.vettVerd)
  }
  ngOnInit(): void {
    this.makeChiamata()
  }
}
