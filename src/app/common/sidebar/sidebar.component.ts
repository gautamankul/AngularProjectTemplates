import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../sidebar.service';
import { NgIf } from '@angular/common';

interface MenuItem {
  icon: string;
  title: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [NgIf, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  isSidebarVisible = false;
  isCollapsed = false;
  openMenus: { [key: string]: boolean } = {};

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.sidebarState.subscribe((state) => {
      this.isSidebarVisible = state;
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
    this.isCollapsed = !this.isCollapsed;
  }

  toggleItem(item: MenuItem) {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  }
  toggleSubmenu(menu: string) {
    this.openMenus[menu] = !this.openMenus[menu];
  }

  

}