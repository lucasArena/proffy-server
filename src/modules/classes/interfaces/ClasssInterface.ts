export interface IClassSchedule {
  id?: string;
  week_day: number;
  from: number;
  to: number;
  created_at?: string;
  updated_at?: string;
}

export interface IClass {
  id?: string;
  subject: string;
  cost: number;
  user_id: string;
  schedule: IClassSchedule[];
  created_at?: string;
  updated_at?: string;
}

export interface IClassesFilters {
  week_day: number;
  subject: string;
  time: number;
}
