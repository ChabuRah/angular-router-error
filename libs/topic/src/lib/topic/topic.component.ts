import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'route-err-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
