import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { NgTemplateOutlet } from '@angular/common';
import { Messages } from '../../core/enums/Messages';
import { MessageServiceService } from '../../core/services/message-service.service';

@Component({
  selector: 'app-photo-report',
  imports: [SectionHeadingComponent, NgTemplateOutlet, ButtonComponent],
  templateUrl: './photo-report.component.html',
  styleUrl: './photo-report.component.scss',
})
export class PhotoReportComponent {
  readonly Messages = Messages;
  protected readonly messages = inject(MessageServiceService);
}
