import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommentService } from '../shared/comment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-sample-web-part',
  templateUrl: './observable-sample-web-part.component.html',
  styleUrls: ['./observable-sample-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ObservableSampleWebPartComponent implements OnInit {
  @Input() description: string;
  comments: Observable<Comment[]>;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.comments = this.commentService.getComments();
  }

}
