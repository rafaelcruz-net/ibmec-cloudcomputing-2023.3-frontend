import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public getComment(idPost:any) : Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8080/post/${idPost}/comment`);
  }
}
