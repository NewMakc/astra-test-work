import alt from '../alt'
import request from '../utils/request';

class SingleBookActions {
  getSingleBook(id) {
    return dispatch => {
      request(`/api/book/${id}`, (err, result) => {
        if (err) return;

        dispatch(result);
      });
    };
  }
}

export default alt.createActions(SingleBookActions);