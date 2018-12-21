import Api from '@/services/Api';

export default {
  index(search) {
    return Api().get('grills', {
      params: { search },
    });
  },
  post(grill) {
    return Api().post('grills', grill);
  },
  show(grillId) {
    return Api().get(`grills/${grillId}`);
  },
  put(grill) {
    return Api().put(`grills/${grill.id}`, grill);
  },
};
