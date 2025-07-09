import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { User } from '../user';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService]
})
export class ProductsComponent {

  productTitle = "Toshiba";
  title: string
  users: User[] = [

  ];

  constructor(x: ProductsService) {
    // let x = new ProductsService();
    this.title = x.sessionTitle;

    this.users = x.products;


    console.log(this.users, "this.users");

    x.products.pop()

  }

  displayMessage(valu: string) {
    console.log(valu);

  }
}
