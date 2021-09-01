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

type moneyType = '-'|'+'