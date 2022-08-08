import { Component, OnInit } from '@angular/core';

import { ListData } from '../list-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title: string | undefined;
  expenseEntry!: ListData[];
  
  isEditItems: boolean | undefined;
  newAttribute: any = {};

  constructor() { }

  ngOnInit(): void {
    this.title = "Home page"

    this.expenseEntry = this.getExpenseEntries();
  }

  getExpenseEntries() : ListData[] { 
    let mockExpenseEntries : ListData[] = [ 
        { id: 1, 
          item: "Pizza", 
        }, 
        { id: 2, 
          item: "Chicken", 
        }, 
        { id: 3,
          item: "Tomato",
        }, 
        { id: 4, 
          item: "Lemon", 
        }, 
        { id: 5, 
          item: "Falcon",  
        }, 
    ]; 
    return mockExpenseEntries; 
  }

  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
    console.log(this.expenseEntry);
  }

  addFieldValue() {
    this.expenseEntry.push(this.newAttribute);
    //two-way data blind (sau khi an them danh sach -> them 1 doi tuong rong vao mang expenseEntry, -> render 1 truong input rong voi [(ngModel)]="entry.id" value="{{ entry.id }}"-> nguoi dung nhap -> day nguoc data vao mang.)
    this.newAttribute = {};
  }

  deleteFieldValue(index: number) {
    this.expenseEntry.splice(index, 1);
  }
}
