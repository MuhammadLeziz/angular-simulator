import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appGradientBorder]',
})
export class GradientBorderDirective {
  element = inject(ElementRef);
  renderer = inject(Renderer2);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timer!: any;
  @Input() GradientConfiguration: {
    delay?: number;
    colors?: string[];
    thicknees?: string;
  } = {};

  @HostListener('mouseenter')
  onEnter() {
    const delay = this.GradientConfiguration?.delay ?? 1000;
    const colors = this.GradientConfiguration?.colors ?? ['#1a3e3e', '#f2be22'];
    const thickness = this.GradientConfiguration?.thicknees ?? '2px';
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      const gradient = `linear-gradient(45deg, ${colors.join(', ')}) 1`;
      this.renderer.setStyle(
        this.element.nativeElement,
        'border',
        `${thickness} solid`,
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'border-image',
        gradient,
      );
    }, delay);
  }

  @HostListener('mouseleave')
  onLeave() {
    clearTimeout(this.timer);
    this.renderer.removeStyle(this.element.nativeElement, 'border');
    this.renderer.removeStyle(this.element.nativeElement, 'border-image');
  }
}
