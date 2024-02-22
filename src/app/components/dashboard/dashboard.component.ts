import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ExpensesService } from '../../Services/expenses.service';
import { Expense } from '../../expense.item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  itemForm!: FormGroup;
expenses: Expense[] = [];
  constructor(private fb: FormBuilder, private expensesService: ExpensesService) {}

  ngOnInit() {
    this.itemForm = this.fb.group({
      itemName: ['', Validators.required],
      itemQuantity: ['', Validators.required],
      itemPrice: ['', Validators.required],
    });

  }
  addItem() {
    this.expensesService.addExpense(this.itemForm.value).subscribe(
      () => {
        console.log('Expense added successfully');
        this.itemForm.reset();
      },
      (error: any) => console.error('Error adding expense:', error)
    );
  }
}
