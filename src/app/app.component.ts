import { Component } from '@angular/core';
import { MenuItem } from 'src/MenuItem';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Cat Cafe';
  displayedColumns: string[] = ['item', 'category', 'price'];
  dataSource = MenuItems;
}

const MenuItems: MenuItem[] = [{"item": "Cookie", "category": "Dessert", "price": 2.00},
{"item": "Pizza", "category": "Entree", "price": 10.00},
{"item": "Jalapeno Bites", "category": "Appetizer", "price": 6.00},
{"item": "Dr. Pepper", "category": "Drinks", "price": 1.50},
{"item": "2 Hot Dogs", "category": "Entree", "price": 7.00},
{"item": "Pasta", "category": "Entree", "price": 8.00},
]
