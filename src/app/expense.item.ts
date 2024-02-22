export interface Expense {
  id?: number;
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
  createdAt?: Date;
  totalPrice?:number;
}
