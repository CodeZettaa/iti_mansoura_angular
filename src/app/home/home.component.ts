import { afterNextRender, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestComponent } from "../test/test.component";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  imports: [TestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ProductsService]
})
export class HomeComponent implements OnInit, AfterViewInit {

  title = "Treka"
  @ViewChild('subTitle') subTitle!: ElementRef;

  constructor(public x: ProductsService) {



    // let x = new ProductsService();
    
    this.title = x.sessionTitle

    let users = x.products;

    console.log(users, "usersusersusers");


    afterNextRender(() => {
      localStorage.setItem("ay7aga", "ay7aga")
    })

  }

  ngOnInit(): void {
    this.x.products
    console.log(this.subTitle, "subTitle");

  }
  ngAfterViewInit(): void {
    console.log(this.subTitle, "subTitle ngAfterViewInit");

  }

}


// depency inject
