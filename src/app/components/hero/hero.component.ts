import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderServiceService } from '../../core/services/loader-service.service';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly loader = inject(LoaderServiceService);
  formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    location: ['', [Validators.required]],
    date: ['', [Validators.required]],
    participants: ['', [Validators.required]],
  });

  onSearch() {
    if (this.form.invalid) {
      alert('Не пытайся обмануть нашу систему)');
    } else {
      const formValue = this.form.value;
      console.log(formValue);
    }
  }
}
