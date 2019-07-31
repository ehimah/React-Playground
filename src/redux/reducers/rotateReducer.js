import { ROTATE } from '../Types';

export default (state, { type, payload }) => {
  switch (type) {
    case ROTATE:
      return { rotating: payload };
    default:
      return state;
  }
};
