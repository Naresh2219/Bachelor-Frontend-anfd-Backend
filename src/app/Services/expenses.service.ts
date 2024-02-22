import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../expense.item';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  private apiUrl = 'http://localhost:8083/api/expenses';

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    const getUrl =`${this.apiUrl}/all`;
    return this.http.get<Expense[]>(getUrl);
  }

  addExpense(expense: Expense): Observable<Expense> {
  const saveUrl = `${this.apiUrl}/save`;
  return this.http.post<Expense>(saveUrl, expense);
}
delete(expense: Expense): Observable<Expense> {
  const deleteUrl = `${this.apiUrl}/remove/${expense.id}`;
  return this.http.delete<Expense>(deleteUrl);
}
totalPrice(price:string):Observable<number>{
  const priceUrl = `${this.apiUrl}/price`;
  return this.http.get<number>(priceUrl);
}
}
