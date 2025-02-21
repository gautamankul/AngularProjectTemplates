import { Component, HostListener } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuVisible = false;

  constructor(private sidebarService: SidebarService) {}

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  closeMenu() {
    this.isMenuVisible = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.popup-menu') && !target.closest('.profile-img')) {
      this.closeMenu();
    }
  }
}
