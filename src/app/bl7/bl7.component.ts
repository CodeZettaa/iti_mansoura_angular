import { Component, inject } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-bl7',
  imports: [],
  templateUrl: './bl7.component.html',
  styleUrl: './bl7.component.scss'
})
export class Bl7Component {

 readonly _productsService = inject(ProductsService)
}
