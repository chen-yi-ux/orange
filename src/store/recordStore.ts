import {RecordItem} from '@/custom';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  createRecord(record: RecordItem){
    const record2: RecordItem = JSON.parse(JSON.stringify(record));
    this.recordList.push(record2);
    recordStore.saveRecords();
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  }
}

recordStore.fetchRecords();

export default recordStore;