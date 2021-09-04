import Vue from 'vue';
import Vuex from 'vuex';
import {Label, RecordItem, RootState} from '@/custom';
import createId from '@/lib/createId';

Vue.use(Vuex);  // 把 store 绑到 Vue.prototype.$store = store

const store = new Vuex.Store({
  state: {
    recordList: [],
    labelList: []
  } as RootState,
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record) {
      const record2: RecordItem = JSON.parse(JSON.stringify(record));
      state.recordList.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    updateRecord(state, record) {
      for (let i = 0; i < state.recordList.length; i++) {
        if (state.recordList[i].id === record.id) {
          state.recordList[i] = record;
        }
      }
      store.commit('saveRecords');
    },
    removeRecord(state, record) {
      store.commit('fetchRecords');
      for (let i = 0; i < state.recordList.length; i++) {
        if (state.recordList[i].id === record.id) {
          state.recordList.splice(i, 1);
        }
      }
      store.commit('saveRecords');
    },
    fetchLabels(state) {
      state.labelList = JSON.parse(window.localStorage.getItem('labelList') || '[]');
    },
    createLabel(state, item) {
      state.labelList.push({name: item.name, svg: item.svg, type: item.type});
      store.commit('saveLabels');
    },
    removeLabel(state, item) {
      store.commit('fetchLabels');
      for (let i = 0; i < state.labelList.length; i++) {
        if (state.labelList[i].name === item.name) {
          state.labelList.splice(i, 1);
          window.alert('已删除');
        }
      }
      store.commit('saveLabels');
    },
    saveLabels(state) {
      window.localStorage.setItem('labelList', JSON.stringify(state.labelList));
    }
  }
});

export default store;
