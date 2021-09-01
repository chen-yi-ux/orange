type RecordItem = {
  type: string,
  amount: string,
  date: string,
  notes: string,
  labels: Label
}

export type Label = {
  id: string,
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
