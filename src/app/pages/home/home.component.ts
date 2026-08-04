import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutHikeComponent } from '../../components/about-hike/about-hike.component';
import { BestProgramsComponent } from '../../components/best-programs/best-programs.component';
import { PopularDestinationsComponent } from '../../components/popular-destinations/popular-destinations.component';
import { TravelBlogComponent } from '../../components/travel-blog/travel-blog.component';
import { PhotoReportComponent } from '../../components/photo-report/photo-report.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutHikeComponent,
    BestProgramsComponent,
    PopularDestinationsComponent,
    TravelBlogComponent,
    PhotoReportComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
