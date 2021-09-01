import recordStore from '@/store/recordStore';
import labelStore from '@/store/labelStore';

const store = {
  ...recordStore,
  ...labelStore
};

export default store;