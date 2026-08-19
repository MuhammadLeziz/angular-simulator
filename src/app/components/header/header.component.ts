import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { BurgerComponent } from '../../shared/ui/burger/burger.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { INavigation } from '../../core/models/interfaces/INavigation';
import { ThemeService } from '../../core/services/theme.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { SelectButtonModule } from 'primeng/selectbutton';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from '../../features/auth/services/auth.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    ButtonComponent,
    BurgerComponent,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ToggleSwitchModule,
    SelectButtonModule,
    FontAwesomeModule,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  faMoon = faMoon;
  faSun = faSun;
  themeService = inject(ThemeService);
  checked = this.themeService.getCurrentTheme() === 'dark';

  presetOptions = [
    { label: 'Aura', value: 'Aura' },
    { label: 'Lara', value: 'Lara' },
    { label: 'Nora', value: 'Nora' },
  ];

  selectedPreset = this.themeService.getSavedPreset();

  onPresetChange(preset: string) {
    if (preset) {
      this.themeService.setPreset(preset);
    }
  }

  isOpen = false;
  timerId!: number;
  date!: string;
  counter = 0;
  showTimer = true;
  liveInput = '';
  navigation: INavigation[] = [
    {
      title: 'Главная',
      link: 'home',
    },
    {
      title: 'Про гида',
      link: 'about-guide',
    },
    {
      title: 'Программа тура',
      link: 'tour-program',
    },
    {
      title: 'Стоимость',
      link: 'price',
    },
    {
      title: 'Блог',
      link: 'blog',
    },
    {
      title: 'Контакты',
      link: 'contacts',
    },
  ];

  ngOnInit() {
    this.date = new Date().toLocaleString();
    this.timerId = setInterval(() => {
      this.date = new Date().toLocaleString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  onClick(): void {
    this.isOpen = !this.isOpen;
  }

  plusCounter(): void {
    this.counter++;
  }

  minusCounter(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  showTimerOrCounter(): void {
    this.showTimer = !this.showTimer;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.liveInput = input.value;
  }
}
