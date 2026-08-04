import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { BurgerComponent } from '../../shared/ui/burger/burger.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, BurgerComponent, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isOpen: boolean = false;
  timerId!: number;
  date!: string;
  counter: number = 0;
  showTimer: boolean = true;
  liveInput: string = '';
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
