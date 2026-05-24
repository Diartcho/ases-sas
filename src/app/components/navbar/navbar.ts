import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  isScrolled  = signal(false);
  isHidden    = signal(false);
  isMobileMenuOpen = signal(false);

  private lastScrollY = 0;

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY;
    this.isScrolled.set(y > 50);

    if (window.innerWidth <= 900 && !this.isMobileMenuOpen()) {
      this.isHidden.set(y > this.lastScrollY && y > 80);
    }
    this.lastScrollY = y;
  }

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMenu();
  }
}
