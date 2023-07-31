import { StrategyInterface } from 'interfaces/strategy';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface StockInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  strategy?: StrategyInterface[];
  organization?: OrganizationInterface;
  _count?: {
    strategy?: number;
  };
}

export interface StockGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
