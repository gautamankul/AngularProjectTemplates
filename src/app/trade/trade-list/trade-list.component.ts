import { NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';

// Import environment file
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-trade-list',
  imports: [NgIf, NgFor, FormsModule,HttpClientModule],
  templateUrl: './trade-list.component.html',
  styleUrl: './trade-list.component.scss'
})
export class TradeListComponent implements OnInit {
  expandedRows: boolean[] = []; 
  orders: any[] = []; 
  i  = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.expandedRows = this.orders.map(() => false); // Initialize expandedRows array
    this.getOrders();
  }

  getOrders() {
    this.http.get(environment.apiUrl + '/master_item_batch').subscribe(
      (data: any) => { 
        this.orders = data;
        this.expandedRows = new Array(this.orders.length).fill(false); 
      },
      error => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  toggleRow(index: number) {
    this.expandedRows[index] = !this.expandedRows[index];
    if (this.expandedRows[index]) {
      this.i = index;
    }
  }

}
