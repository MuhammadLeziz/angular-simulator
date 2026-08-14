import { Directive, ElementRef, HostBinding, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBoldOnHover]',
})
export class BoldOnHoverDirective {
  // @HostBinding('style.fontWeight') bold: string = 'normal';
  element = inject(ElementRef);
  renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onEnter() {
    // this.bold = 'bold';
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', 'bold');
  }

  @HostListener('mouseleave')
  onLeave() {
    // this.bold = 'normal';
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', '400');
  }
}
