import React from 'react';

export enum IconNames {
  CHAR_BAR = 'chart-bar',
  SERVERS = 'servers'
}

export type IconNameType = IconNames.SERVERS | IconNames.CHAR_BAR;

interface Props {
  name: IconNameType;
  className?: string;
}

const defaultProps: Partial<Props> = {};

export const Icon = (props: Props) => {
  switch (props.name) {
    case IconNames.CHAR_BAR: {
      return (
        <svg
          data-icon-name={IconNames.CHAR_BAR}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z" />
        </svg>
      );
    }
    case IconNames.SERVERS: {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          data-icon-name={IconNames.SERVERS}
        >
          <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zM12 2v2h2V2h-2zm4 0v2h2V2h-2zm-4 7v2h2V9h-2zm4 0v2h2V9h-2zm-4 7v2h2v-2h-2zm4 0v2h2v-2h-2z" />
        </svg>
      );
    }
  }
  return null;
};

Icon.defaultProps = defaultProps;
