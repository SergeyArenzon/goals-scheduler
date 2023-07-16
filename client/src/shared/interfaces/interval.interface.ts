
export interface IInterval  {
    current_value: number,
    end_date: string,
    order: number,
    start_date: string,
    target_value: number,
    status: "inprogress" | "todo" | "done" | "failed"
  }
  