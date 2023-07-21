import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('carouselSlide', { static: true }) carouselSlide!: ElementRef;
  currentIndex = 0;
  positionDots = [0, 1, 2];

  ngOnInit() {
    this.updatePositionIndicator();
    setInterval(() => this.nextSlide(), 10000);
  }

  updatePositionIndicator() {
    // No need to change anything here, the same as before
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.positionDots.length;
    const slideContainer = this.carouselSlide.nativeElement;
    slideContainer.style.marginLeft = `-${this.currentIndex * 100}%`;
    this.updatePositionIndicator();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.positionDots.length) % this.positionDots.length;
    const slideContainer = this.carouselSlide.nativeElement;
    slideContainer.style.marginLeft = `-${this.currentIndex * 100}%`;
    this.updatePositionIndicator();
  }
}
