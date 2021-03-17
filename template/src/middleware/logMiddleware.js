/* eslint-disable no-console */

const logMiddleware = () => (next) => (action) => {
  console.log(action.type);
  next(action);
};

export default logMiddleware;
