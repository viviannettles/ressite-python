import { Component, Input } from '@angular/core';
import { PageHeader } from '../../components/page-header/page-header';

@Component({
  selector: 'app-page-layout',
  imports: [PageHeader],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.css',
})
export class PageLayout {
  @Input() headerTitle = "";

}
