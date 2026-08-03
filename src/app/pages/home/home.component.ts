import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutHikeComponent } from '../../components/about-hike/about-hike.component';
import { BestProgramsComponent } from '../../components/best-programs/best-programs.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutHikeComponent, BestProgramsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
