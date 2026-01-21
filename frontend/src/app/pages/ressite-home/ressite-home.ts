import { Component } from '@angular/core';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-ressite-home',
  imports: [PageLayout],
  templateUrl: './ressite-home.html',
  styleUrl: './ressite-home.css',
})
export class RessiteHome {
  header = "Welcome Home!";
  body = "I am home content. Hear me roar!";
}
