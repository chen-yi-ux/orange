import defaultLabels from '@/constants/defaultLabels';
import createId from '@/lib/createId';
import {Label} from '@/custom';

const localStorageKeyName = 'labelList';
window.localStorage.setItem(localStorageKeyName, JSON.stringify(defaultLabels));
const labelStore = {
  labelList: [] as Label[],
  fetchLabels() {
    this.labelList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.labelList;
  },
  createLabel(item: Label) {
    const id = createId().toString();
    this.labelList.push({id, name: item.name, svg: item.svg, type: item.type});
    labelStore.saveLabels();
  },
  removeLabel(item: Label) {
    for (let i = 0; i < this.labelList.length; i++) {
      if (this.labelList[i].name === item.name) {
        this.labelList.splice(i, 1);
        window.alert('已删除');
      }
    }
    labelStore.saveLabels();
  },
  saveLabels() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.labelList));
  }
};

labelStore.fetchLabels();

export default labelStore;
