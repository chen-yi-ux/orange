import {Label} from '@/custom';
import defaultLabels from '@/constants/defaultLabels';
import createId from '@/lib/createId';

type LabelListModel = {
  data: Label[],
  fetch: () => Label[],
  create: (item: Label) => void,
  remove: (item: Label) => void,
  save: () => void
}

const localStorageKeyName = 'labelList';
window.localStorage.setItem(localStorageKeyName, JSON.stringify(defaultLabels));
const labelListModel: LabelListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(item) {
    const id = createId().toString();
    this.data.push({id, name: item.name, svg: item.svg, type: item.type});
    this.save();
  },
  remove(item) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].name === item.name) {
        console.log(this.data);
        this.data.splice(i, 1);
        window.alert('已删除');
      }
    }
    this.save();
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default labelListModel;