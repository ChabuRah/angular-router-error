import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'route-err-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
