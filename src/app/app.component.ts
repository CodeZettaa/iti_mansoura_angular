import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SettingComponent from "./setting/setting.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { User } from './user';
import { FormsModule } from '@angular/forms'
import { ProductsComponent } from "./products/products.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, SettingComponent, AboutComponent, HomeComponent, ProductsComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // userName: string = "ahmed"

  userName = signal<string>('Ahmed')
  // userAge: number = 20;

  userAge = signal<number>(20)
  user: User = {
    name: "ahmed",
    age: 40
  }

  users: User[] = [
    { name: "Ahmed", age: 33, photo: 'images/stch3.jpg' },
    { name: "Sara", age: 20, photo: 'images/stch4.png' },
    { name: "Abdo", age: 10, photo: 'images/stch3.png' },
    { name: "Treka", age: 10, photo: 'images/stch3.png' },

  ]

  imageURL: string = 'images/stch3.png';



  sayHi(value: any) {
    console.log("bteeeee5", value);


  }

  changeName() {

    console.log("Hello");

    // this.userName.set("ITI")

    this.userName.update((prev) => prev + "bteeee5")

    this.userAge.set(5)

    this.users[0].name = "ITI"


  }

  // welcome(e: any) {
  //  this.userName  = e.target.value
  // }
}


