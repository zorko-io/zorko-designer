import React, {Component, ReactNode} from 'react';
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

export class AppLogger extends Component<Props> {
  static defaultProps = defaultProps;

  showMessage = (level, message) => {
    alert(message);
  };

  logMessage = (level, message) => {
    const isAlreadyInConsole = /Redux\|Action:/.test(message);
    if (isAlreadyInConsole) {
      return;
    }

    // eslint-disable-next-line no-console
    console[level](message);

    if (level === 'error') {
      // Not sure that it's a right place, need a proper popup
      this.showMessage(level, message);
    }
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    logger.error(`React|Render| ${errorInfo.componentStack}`);
  }

  render() {
    return (
      <LoggerContainer
        sessionID={Math.random()}
        limit={75} // stack limit. After overflowing the first item will be remove
        getCurrentDate={() => {
          // You can replace default date to another format
          return dayjs().format('YYYY-MM-DD HH:mm:ss');
        }}
        stdout={this.logMessage} // show logs for your users
        onError={stackData => {
          // Send stack on your Backend or ElasticSearch or save it to file etc.
          // eslint-disable-next-line no-console
          console.error(JSON.stringify(stackData, null, 2));
        }}
        onPrepareStack={stack => {
          // This is middleware
          // Add extra data to stack before it will call onError
          stack.language = window.navigator.language;
        }}
      >
        {this.props.children}
      </LoggerContainer>
    );
  }
}
