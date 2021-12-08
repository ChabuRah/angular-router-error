import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TopicComponent}
    ]),
  ],
  declarations: [
    TopicComponent,
  ],
})
export class TopicModule {}
