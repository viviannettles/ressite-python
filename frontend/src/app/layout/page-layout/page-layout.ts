import { Component, Input } from '@angular/core';
import { PageHeader } from '../../components/page-header/page-header';
import { PageContent } from '../../components/page-content/page-content';

@Component({
  selector: 'app-page-layout',
  imports: [PageHeader, PageContent],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.css',
})
export class PageLayout {
  @Input() headerTitle = "";
  @Input() bodyContent = "";

}
