import { IInterval } from "./interval.interface"

export interface IGoal {
    id: number,
    description: string,
    start_date: string,
    end_date: string,
    current_value: number,
    target_value: number,
    target_date: string,
    repeat: "daily" | "weekly" | "monthly",
    intervals: IInterval[],
    status: "done" | "inprogress" | "failed" 
  }