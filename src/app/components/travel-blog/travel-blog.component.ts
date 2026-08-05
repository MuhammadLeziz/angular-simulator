import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ITravels } from '../../core/models/interfaces/ITravels';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { MessageServiceService } from '../../core/services/message-service.service';
import { Messages } from '../../core/enums/Messages';

@Component({
  selector: 'app-travel-blog',
  imports: [SectionHeadingComponent, ButtonComponent],
  templateUrl: './travel-blog.component.html',
  styleUrl: './travel-blog.component.scss',
})
export class TravelBlogComponent {
  readonly Messages = Messages;
  protected readonly message = inject(MessageServiceService);
  travels: ITravels[] = [
    {
      id: 1,
      image: '/images/travel-blog/image1.jpg',
      title: 'Красивая Италия, какая она в реальности?',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      date: '01/04/2023',
      link: 'читать статью',
    },
    {
      id: 2,
      image: '/images/travel-blog/image2.jpg',
      title: 'Долой сомнения! Весь мир открыт для вас!',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих...',
      date: '01/04/2023',
      link: 'читать статью',
    },
    {
      id: 3,
      image: '/images/travel-blog/image3.jpg',
      title: 'Как подготовиться к путешествию в одиночку? ',
      description: 'Для современного мира базовый вектор развития предполагает.',
      date: '01/04/2023',
      link: 'читать статью',
    },
    {
      id: 4,
      image: '/images/travel-blog/image4.jpg',
      title: 'Индия ... летим?',
      description: 'Для современного мира базовый.',
      date: '01/04/2023',
      link: 'читать статью',
    },
  ];
}
