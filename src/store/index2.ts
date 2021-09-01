import recordListModel from '@/models/recordListModel';
import labelListModel from '@/models/labelListModel';

const store = {
  recordList: recordListModel.fetch(),
  labelList: labelListModel.fetch()
};

export default store;