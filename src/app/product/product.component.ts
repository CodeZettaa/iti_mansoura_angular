import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { User } from '../user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  // @Input() title!: string
  title = input<string>();
  user = input<User>()

  // @Output() sendMessage: EventEmitter<string> = new EventEmitter()

  sendMessage = output<string>()


  sayHi() {
    console.log('hello');
    this.sendMessage.emit("hello")

  }
}
