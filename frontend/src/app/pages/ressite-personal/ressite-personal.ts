import { Component } from '@angular/core';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-ressite-personal',
  imports: [PageLayout],
  templateUrl: './ressite-personal.html',
  styleUrl: './ressite-personal.css',
})
export class RessitePersonal {
    header = "Welcome Personal!";
  body = "I am personal content. Hear me roar!";

}
