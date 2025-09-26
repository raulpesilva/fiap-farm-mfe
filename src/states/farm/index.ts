import { createReStateDispatch } from '@raulpesilva/re-state';

export const FARM_KEY = 'farm';

interface Farm {
  user_id: number;
  name: string;
  id: number;
  created_at: string;
  updated_at: string;
}

export const dispatchFarm = createReStateDispatch<Farm | null>(FARM_KEY);
