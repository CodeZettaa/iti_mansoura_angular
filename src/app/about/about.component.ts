import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { JsonPlaceHolderService } from '../json-place-holder.service';
import { Food } from '../food';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnDestroy {

  allPost = []
  _jsonPlaceHolderService = inject(JsonPlaceHolderService)

  allFoods: Food[] = [];
  isLoading: boolean = true
  ay7aga!: { posts: Subscription, food: Subscription }

  ngOnInit(): void {

    this.getPosts()
    this.getFood()
  }

  getPosts() {
    this._jsonPlaceHolderService.getPosts().subscribe({
      next: (res) => {
        console.log(res);
        // this.allPost = res.map((ele: any) => ({ title: ele.title, body: ele.body }))
        // this.allPost = res
        console.log(this.allPost);

      },
      error: (err) => {
        console.log("err");

      },
      complete: () => {
        console.log("DOne");

      }
    });
  }

  getFood() {
    this._jsonPlaceHolderService.getFood().subscribe({
      next: (res) => {
        console.log(res);
        this.allFoods = res;
        this.isLoading = false
      }
    })
  }

  ngOnDestroy(): void {
    // this.ay7aga.unsubscribe()
  }
}


// takeUntillDestory
// take(1)
// mergeMap
// concatMap