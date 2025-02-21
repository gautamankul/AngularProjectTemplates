import { Component } from '@angular/core';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';

@Component({
  selector: 'app-navigation',
  imports: [SidebarComponent,HeaderComponent,FooterComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
