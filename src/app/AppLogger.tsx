import React, {ReactNode, useCallback} from 'react';
import logger, {LoggerContainer} from 'logrock';
import dayjs from 'dayjs';

interface Props {
  sessionId: string;
  children: ReactNode;
}

const defaultProps: Partial<Props> = {
  sessionId: '',
  children: null
};

export const AppLogger = (props: Props) => {
  const showMessage = useCallback((level, message) => {
    alert(message);
  }, []);

  const logMessage = useCallback((level, message) => {
    console[level](message);
  }, []);

  return (
    <LoggerContainer
      sessionID={Math.random()}
      limit={75} // stack limit. After overflowing the first item will be remove
      getCurrentDate={() => {
        // You can replace default date to another format
        return dayjs().format('YYYY-MM-DD HH:mm:ss');
      }}
      stdout={logMessage} // show logs for your users
      onError={stackData => {
        // Send stack on your Backend or ElasticSearch or save it to file etc.
        showMessage('error', JSON.stringify(stackData, null, 2));
      }}
      onPrepareStack={stack => {
        // This is middleware
        // Add extra data to stack before it will call onError
        stack.language = window.navigator.language;
      }}
    >
      {props.children}
    </LoggerContainer>
  );
};

AppLogger.defaultProps = defaultProps;
