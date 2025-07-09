import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  _httpClient = inject(HttpClient)
  constructor() { }



  getPosts(): Observable<[{ title: string, body: string }]> {
    return this._httpClient.get(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(map((posts: any) => {
        console.log(posts, "from service");
        posts = posts.map((post: any) => ({ title: post.title, body: post.body }))
        return posts
      }))
  }


  getFood(): Observable<Food[]> {
    return this._httpClient.get<{ count: number, recipes: Food[] }>(`https://forkify-api.herokuapp.com/api/search?q=pizza`)
      .pipe(map(res => {
        res.recipes = res.recipes.map(ele => ({
          image_url: ele.image_url,
          social_rank: ele.social_rank,
          title: ele.title
        }))
        return res.recipes
      }))

  }
}
