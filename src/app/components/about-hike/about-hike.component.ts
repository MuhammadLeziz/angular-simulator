import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { FormsModule } from '@angular/forms';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { MessageServiceService } from '../../core/services/message-service.service';
import { Messages } from '../../core/enums/Messages';

@Component({
  selector: 'app-about-hike',
  imports: [ButtonComponent, FormsModule, SectionHeadingComponent],
  templateUrl: './about-hike.component.html',
  styleUrl: './about-hike.component.scss',
})
export class AboutHikeComponent {
  readonly Messages = Messages;
  protected readonly message = inject(MessageServiceService);
  @ViewChild('video')
  video!: ElementRef<HTMLVideoElement>;

  isActive = false;
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
