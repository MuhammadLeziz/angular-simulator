import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';

export const PRESETS: Record<string, any> = {
  Aura,
  Lara,
  Nora,
};

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeSubject = new BehaviorSubject<string>(this.getCurrentTheme());
  public theme$ = this.themeSubject.asObservable();

  constructor() {
    this.theme$.subscribe((theme) => this.changeTheme(theme));
    this.setPreset(this.getSavedPreset());
  }

  toggleTheme() {
    const currentTheme = localStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    this.themeSubject.next(newTheme);
    this.changeTheme(newTheme);
  }

  getCurrentTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light' || currentTheme === null) return 'light';
    else return 'dark';
  }

  changeTheme(theme: string) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }

  setPreset(presetName: string) {
    const preset = PRESETS[presetName] || Aura;
    usePreset(preset);
    localStorage.setItem('preset', presetName);
  }

  getSavedPreset(): string {
    return localStorage.getItem('preset') || 'Aura';
  }
}
