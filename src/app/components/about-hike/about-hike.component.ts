import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-hike',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './about-hike.component.html',
  styleUrl: './about-hike.component.scss',
})
export class AboutHikeComponent {
  @ViewChild('video')
  video!: ElementRef<HTMLVideoElement>;
  isActive: boolean = false;
  playVideo() {
    const video = this.video.nativeElement;
    if (video.paused) {
      video.play();
      this.isActive = true;
    } else {
      video.pause();
      this.isActive = false;
    }
  }
}
