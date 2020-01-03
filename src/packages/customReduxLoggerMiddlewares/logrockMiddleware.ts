import logger from 'logrock';

export const logrockMiddleware = () => next => action => {
  const beforeAction = Date.now();

  next(action);

  const afterAction = Date.now();
  const took = afterAction - beforeAction;

  logger.log(`Redux|Action: ${action.type} in ${took} ms`);

  return;
};
