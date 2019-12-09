import React, {ReactNode} from 'react';

interface Props {
  renderHeader: () => ReactNode;
  renderSideBar: () => ReactNode;
  renderLeftDrawer: () => ReactNode;
  renderCanvas: () => ReactNode;
}

const defaultProps: Partial<Props> = {};

export const AppLayout = (props: Props) => {
  return (
    <div className="h-screen bg-green-100">
      <div className="text-gray-700 text-center bg-gray-300 px-4 py-2">{props.renderHeader()}</div>
      <div className="h-full flex text-gray-700 bg-gray-500">
        <div className="flex-row bg-green-400 py-2 w-12">{props.renderSideBar()}</div>
        <div className="flex-row bg-yellow-200" style={{width: '20rem'}}>
          {props.renderLeftDrawer()}
        </div>
        <div className="flex-row bg-blue-200 w-full">{props.renderCanvas()}</div>
      </div>
    </div>
  );
};

AppLayout.defaultProps = defaultProps;
