type RecordItem = {
  type: string,
  amount: string,
  date: string,
  notes: string,
  labels: Label
}

export type Label = {
  name: string,
  svg: string,
  type: moneyType
}

type moneyType = '-'|'+'