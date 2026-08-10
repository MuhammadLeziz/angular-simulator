import { Component, inject, OnInit } from '@angular/core';
// import './training';
import './collection';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { Router, RouterOutlet } from '@angular/router';
import { Colors } from './core/enums/Color';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Messages } from './core/enums/Messages';
import { MessageServiceService } from './core/services/message-service.service';
import { NgTemplateOutlet } from '@angular/common';
import { LocalStorageService } from './core/services/local-storage.service';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { LoaderComponentComponent } from './components/loader-component/loader-component.component';
import { UsersComponent } from './components/users/users.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    RouterOutlet,
    NotFoundComponent,
    NgTemplateOutlet,
    FooterComponent,
    MessageComponent,
    LoaderComponentComponent,
    UsersComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLoading = true;
  private readonly storage = inject(LocalStorageService);
  // Дз 15
  ngOnInit() {
    console.log(this.isCorrectColor(Colors.GREEN));
    this.saveLastVisitDate();
    this.saveVisitCount();

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  // Задача 2
  isCorrectColor(color: Colors): boolean {
    const correctColor = [Colors.BLUE, Colors.GREEN, Colors.RED];
    return correctColor.includes(color);
  }

  // Задача 3
  saveLastVisitDate(): void {
    const date = new Date().toLocaleString();
    this.storage.setItem('lastSession', date);
  }

  // Задача 4
  saveVisitCount(): void {
    const savedCount = this.storage.getItem('visitCount');
    let count: number;
    if (savedCount) {
      count = Number(savedCount);
    } else {
      count = 0;
    }
    this.storage.setItem('visitCount', count + 1);
  }
}
