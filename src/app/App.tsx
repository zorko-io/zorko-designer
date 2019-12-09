import React from 'react';
import _ from 'lodash';
import {AppLayout} from './AppLayout';
import {AnalyticBoard} from '../features/analyticBoard/components/AnalyticBoard';
import {ChooseSpecButton} from '../features/chooseSpecFlow/components/ChooseSpecButton';

interface Props {
  label?: string;
  onAppOpen?: () => void;
}

const defaultProps: Partial<Props> = {
  label: 'Test',
  onAppOpen: _.noop
};

export const App = (props: Props) => {
  return (
    <AppLayout
      renderHeader={() => <ChooseSpecButton />}
      renderSideBar={() => (
        <svg
          className="fill-current inline-block h-8 w-8"
          data-icon-name="chart-bar"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z" />
        </svg>
      )}
      renderLeftDrawer={() => <span>Left Drawer</span>}
      renderCanvas={() => <AnalyticBoard />}
    />
  );
};

App.defaultProps = defaultProps;
