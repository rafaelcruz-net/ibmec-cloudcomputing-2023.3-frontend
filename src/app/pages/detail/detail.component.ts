import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post.model';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';
import { Comment } from 'src/app/model/comment.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  post?: Post;
  comment?: Comment[];

  constructor(private postService: PostService,
    private commentService: CommentService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let idPost = this.route.snapshot.params["idPost"];

    this.postService.getPostById(idPost).subscribe(response => {
      this.post = response;
    });

    this.commentService.getComment(idPost).subscribe(response => {
      this.comment = response;
      console.log(this.comment);
    });
  }

}
