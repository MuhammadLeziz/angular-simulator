import { Component, inject } from '@angular/core';
import { SectionHeadingComponent } from '../../shared/ui/section-heading/section-heading.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { IDestination } from '../../core/models/interfaces/IDestination';
import { MessageServiceService } from '../../core/services/message-service.service';
import { Messages } from '../../core/enums/Messages';

@Component({
  selector: 'app-popular-destinations',
  imports: [SectionHeadingComponent, ButtonComponent],
  templateUrl: './popular-destinations.component.html',
  styleUrl: './popular-destinations.component.scss',
})
export class PopularDestinationsComponent {
  readonly Messages = Messages;
  protected readonly message = inject(MessageServiceService);
  destination: IDestination[] = [
    {
      id: 1,
      image: '/images/destination/image-1.jpg',
      rating: 4.9,
      title: 'Озеро возле гор',
      subtitle: 'романтическое приключение',
      price: '480 $',
      star: '/icons/destination/ic_round-star.svg',
    },
    {
      id: 2,
      image: '/images/destination/image-2.jpg',
      rating: 4.5,
      title: 'Ночь в горах',
      subtitle: 'в компании друзей',
      price: '500 $',
      star: '/icons/destination/ic_round-star.svg',
    },
    {
      id: 3,
      image: '/images/destination/image-3.jpg',
      rating: 5.0,
      title: 'Растяжка в горах',
      subtitle: 'для тех, кто забоится о себе',
      price: '230 $',
      star: '/icons/destination/ic_round-star.svg',
    },
  ];
}
