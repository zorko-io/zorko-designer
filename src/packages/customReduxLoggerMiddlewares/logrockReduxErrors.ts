import logger from 'logrock';

export const logrockReduxErrors = () => next => action => {
  try {
    next(action);
  } catch (e) {
    logger.error('GOT ERROR', e);
  }
};
