import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-body-content',
  imports: [],
  templateUrl: './page-body-content.html',
  styleUrl: './page-body-content.css',
})
export class PageBodyContent {
  @Input() body = "";
}
