import { Component, Input } from '@angular/core';
import { PageHeader } from '../../components/page-header/page-header';
import { PageBodyContent } from '../../components/page-body-content/page-body-content';

@Component({
  selector: 'app-page-layout',
  imports: [PageHeader, PageBodyContent],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.css',
})
export class PageLayout {
  @Input() headerTitle = "";
  @Input() bodyContent = "";

}
