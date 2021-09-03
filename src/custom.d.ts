type RootState = {
  recordList: RecordItem[],
  labelList: Label[]
}

type RecordItem = {
  id?: number,
  type: string,
  amount: number,
  date: string,
  notes: string,
  labels: Label
}

export type Label = {
  name: string,
  svg: string,
  type: moneyType
}

type moneyType = '-' | '+'

declare global{
  interface Window {
    store:{
      recordList: RecordItem[];
      labelList: Label[];
    }
  }
}
