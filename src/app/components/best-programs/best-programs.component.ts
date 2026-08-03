import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { IPrograms } from '../../core/models/interfaces/IPrograms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-best-programs',
  imports: [ButtonComponent, JsonPipe],
  templateUrl: './best-programs.component.html',
  styleUrl: './best-programs.component.scss',
})
export class BestProgramsComponent {
  programs: IPrograms[] = [
    {
      id: 1,
      icon: '/icons/best-programs/icon1.svg',
      title: 'Опытный гид',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      icon: '/icons/best-programs/icon2.svg',
      title: 'Безопасный поход',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      icon: '/icons/best-programs/icon3.svg',
      title: 'Опытный гид',
      text: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];
}
