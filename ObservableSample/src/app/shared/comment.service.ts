import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getComments(): Observable<Comment[]> {
    return this.client.get<Comment[]>(this.baseUrl + '/comments');
  }
}
