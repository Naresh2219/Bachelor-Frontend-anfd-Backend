import { Component, Input, OnInit } from '@angular/core';
import { ExpensesService } from '../../Services/expenses.service';
import { Expense } from '../../expense.item';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expensesService.getExpenses().subscribe(
      (expenses: Expense[]) => this.expenses = expenses,
      (error: any) => console.error('Error loading expenses:', error)
    );
  }

  deleteExpense(expense: Expense): void {
    this.expensesService.delete(expense).subscribe(
      ()=>{
        console.log("deleted sucessfully");
        this.loadExpenses();
      },
      (error:any)=>{
      console.log("Error delete",error);
      });
  }
getTotalPrice(): number {
  return this.expenses.reduce((total, expense) => total + (expense.itemQuantity * expense.itemPrice), 0);
}

}
