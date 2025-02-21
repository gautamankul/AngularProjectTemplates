import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface IdeaCategory {
  code: string;
  name: string;
  count: number;
  color: string;
}

interface PageData {
  url: string;
  volume: string;
  ideas: number;
  priority: number;
}


@Component({
  selector: 'app-dashboard',
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  ideaCategories: IdeaCategory[] = [
    { code: 'St', name: 'Strategy Ideas', count: 9, color: '#2196F3' },
    { code: 'Ba', name: 'Backlinks Ideas', count: 24, color: '#8BC34A' },
    { code: 'Te', name: 'Technical SEO Ideas', count: 9, color: '#FF5722' },
    { code: 'Sf', name: 'SERP Features Ideas', count: 8, color: '#F44336' },
    { code: 'Se', name: 'Semantic Ideas', count: 21, color: '#9C27B0' },
    { code: 'Co', name: 'Content Ideas', count: 142, color: '#00BCD4' }
  ];

  pages: PageData[] = [
    {
      url: 'http://yilitprocurement.in/',
      volume: '2.3m',
      ideas: 11,
      priority: 3
    },
    {
      url: 'http://www.wms.com/',
      volume: '2.0m',
      ideas: 14,
      priority: 3
    },
    {
      url: 'http://www.gautamankul.medium.com/',
      volume: '673.0k',
      ideas: 12,
      priority: 2
    }
  ];
}
