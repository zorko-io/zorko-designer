import React, {ReactNode} from 'react';
import classname from 'classnames';
import './button.css';
import _ from 'lodash';

export type ButtonType = 'primary' | 'default';

interface Props {
  type?: ButtonType;
  children: ReactNode;
  onClick?: () => void;
}

const defaultProps: Partial<Props> = {
  type: 'default',
  onClick: _.noop
};

export const Button = (props: Props) => (
  <button
    onClick={props.onClick}
    className={classname('btn', {
      'btn-primary': props.type == 'primary',
      'btn-default': props.type == 'default'
    })}
  >
    {props.children}
  </button>
);

Button.defaultProps = defaultProps;
