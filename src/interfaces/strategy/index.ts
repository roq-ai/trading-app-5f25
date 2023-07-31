import { StockInterface } from 'interfaces/stock';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StrategyInterface {
  id?: string;
  parameters: string;
  stock_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  stock?: StockInterface;
  user?: UserInterface;
  _count?: {};
}

export interface StrategyGetQueryInterface extends GetQueryInterface {
  id?: string;
  parameters?: string;
  stock_id?: string;
  user_id?: string;
}
