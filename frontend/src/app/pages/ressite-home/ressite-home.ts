import { Component } from '@angular/core';
import { PageLayout } from '../../layout/page-layout/page-layout';
import { ImageCarousel } from '../../components/image-carousel/image-carousel';

@Component({
  selector: 'app-ressite-home',
  imports: [PageLayout, ImageCarousel],
  templateUrl: './ressite-home.html',
  styleUrl: './ressite-home.css',
})
export class RessiteHome {
  header = "Welcome Home!";
  homeImages = [
    {src: '../assets/images/headshot-2025.jpg', alt: 'Description of image one' },
    {src: '../assets/images/favicon.ico', alt: 'Description of image two' },
  ];
}
