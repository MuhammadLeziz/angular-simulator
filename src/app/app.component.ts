import { Component, inject, OnInit } from '@angular/core';
// import './training';
import './collection';
import { HeaderComponent } from './components/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { Colors } from './core/enums/Color';
import { LocalStorageService } from './core/services/local-storage.service';
import { FooterComponent } from './components/footer/footer.component';
import { MessageComponent } from './components/message/message.component';
import { LoaderComponentComponent } from './components/loader-component/loader-component.component';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    MessageComponent,
    LoaderComponentComponent,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  router = inject(Router);
  isLoading = true;
  private readonly storage = inject(LocalStorageService);
  // Дз 15
  ngOnInit() {
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
