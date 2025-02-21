import { Component, OnInit } from '@angular/core';
import { Product } from './bill-list.interface';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bill-list',
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgFor],
  templateUrl: './bill-list.component.html',
  styleUrl: './bill-list.component.scss'
})
export class BillListComponent implements OnInit {

  constructor() { }

  products: Product[] = [
    { code: 'P001', name: 'Product 1', category: 'Category A' },
    { code: 'P002', name: 'Product 2', category: 'Category B' },
    { code: 'P003', name: 'Product 3', category: 'Category A' },
    { code: 'P004', name: 'Product 4', category: 'Category C' },
    { code: 'P005', name: 'Product 5', category: 'Category B' },
    { code: 'P006', name: 'Product 6', category: 'Category A' },
    { code: 'P007', name: 'Product 7', category: 'Category C' },
    { code: 'P008', name: 'Product 8', category: 'Category A' },
    { code: 'P009', name: 'Product 9', category: 'Category B' },
    { code: 'P010', name: 'Product 10', category: 'Category C' },
    { code: 'P011', name: 'Product 11', category: 'Category A' },
    { code: 'P012', name: 'Product 12', category: 'Category B' },
    { code: 'P013', name: 'Product 13', category: 'Category C' },
    { code: 'P014', name: 'Product 14', category: 'Category A' },
    { code: 'P015', name: 'Product 15', category: 'Category B' },
    { code: 'P016', name: 'Product 16', category: 'Category C' },
    { code: 'P017', name: 'Product 17', category: 'Category A' },
    { code: 'P018', name: 'Product 18', category: 'Category B' },
    { code: 'P019', name: 'Product 19', category: 'Category C' },
    { code: 'P020', name: 'Product 20', category: 'Category A' },
  ];

  //state of table  
  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  searchTerm: string = '';
  sortColumn: string = 'code';
  sortDirection: 'asc' | 'desc' = 'asc';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  ngOnInit() {
    this.filteredProducts = [...this.products];
    this.updatePagination();
  }

  sort(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredProducts.sort((a: any, b: any) => {
      const aValue = a[column].toLowerCase();
      const bValue = b[column].toLowerCase();

      if (this.sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    this.updatePagination();
  }

  onSearch() {
    this.currentPage = 1;
    this.filteredProducts = this.products.filter(product =>
      Object.values(product).some(value =>
        value.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    );
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, startIndex + this.pageSize);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  onPageSizeChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

}
