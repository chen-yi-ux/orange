import {Label, RecordItem} from '@/custom';

type LabelListModel = {
  data: Label[],
  fetch: () => Label[],
  create: (item: Label) => Label,
  save: () => void
}

const localStorageKeyName = 'labelList'
const labelListModel: LabelListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data
  },
  create(item){
    this.data.push({name: item.name, svg: item.svg, type: item.type});
    this.save();
    return item;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
}

export default labelListModel;