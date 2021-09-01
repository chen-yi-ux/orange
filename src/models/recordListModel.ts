import {RecordItem} from '@/custom';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  create(record: RecordItem){
    const record2: RecordItem = JSON.parse(JSON.stringify(record));
    this.data.push(record2);
    this.save();
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default recordListModel;