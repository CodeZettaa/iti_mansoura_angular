import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  value!: number
  constructor() { }

  set numberValue(value: number) {
    this.value = value
  }
  convertToString(): string {
    return this.value.toString()
  }
}
