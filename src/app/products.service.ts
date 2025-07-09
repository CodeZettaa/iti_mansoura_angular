import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import SettingComponent from './setting/setting.component';
@Injectable({
  providedIn: SettingComponent
})

export class ProductsService {
  products: User[] = [{ name: "Ahmed", age: 33, photo: 'images/stch3.jpg', id: 1 },
  { name: "Sara", age: 20, photo: 'images/stch4.png', id: 2 },
  { name: "Abdo", age: 10, photo: 'images/stch3.png', id: 3 },
  { name: "Treka", age: 10, photo: 'images/stch3.png', id: 4 },
  ]
  sessionTitle = "hello from the other side"
  constructor( ) { 
  
  }

 
}
