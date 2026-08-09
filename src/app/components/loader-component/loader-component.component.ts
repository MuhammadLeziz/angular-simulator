import { Component, inject } from '@angular/core';
import { LoaderServiceService } from '../../core/services/loader-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader-component',
  imports: [AsyncPipe],
  templateUrl: './loader-component.component.html',
  styleUrl: './loader-component.component.scss',
})
export class LoaderComponentComponent {
  readonly loader = inject(LoaderServiceService);
}
