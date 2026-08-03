import { Component, OnInit } from '@angular/core';
// import './training';
import './collection';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { RouterOutlet } from '@angular/router';
import { Colors } from './core/enums/Color';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isLoading = true;

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
    const date = new Date();
    localStorage.setItem('lastSession', date.toLocaleString());
  }

  // Задача 4
  saveVisitCount(): void {
    const savedCount = localStorage.getItem('visitCount');
    let count: number;
    if (savedCount) {
      count = Number(savedCount);
    } else {
      count = 0;
    }
    localStorage.setItem('visitCount', (count + 1).toString());
  }
}
