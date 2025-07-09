import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() title!: string;

  constructor() {
    console.log(this.title);

  }
  ngOnInit(): void {
    console.log(this.title, "from on init");

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.title, "from on ngOnChanges");

  }
  ngDoCheck(): void {
    console.log(this.title, "from on ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");

  }
}
