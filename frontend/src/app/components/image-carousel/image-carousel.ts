import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  imports: [],
  templateUrl: './image-carousel.html',
  styleUrl: './image-carousel.css',
})
export class ImageCarousel {
  @Input() images: { src: string; alt: string }[] = [];
  index = 0;

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.index = (this.index + 1) % this.images.length;
  }
}
