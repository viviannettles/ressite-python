import { Component } from '@angular/core';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-ressite-work',
  imports: [PageLayout],
  templateUrl: './ressite-work.html',
  styleUrl: './ressite-work.css',
})
export class RessiteWork {
  header = "Welcome Work!";
  body = "I am work content. Hear me roar!";

}
