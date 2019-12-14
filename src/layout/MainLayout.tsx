import React, {ReactNode} from 'react';
interface Props {
  renderHeader: () => ReactNode;
  renderSideBar: () => ReactNode;
  renderContent: () => ReactNode;
}

const defaultProps: Partial<Props> = {};

export const MainLayout = (props: Props) => {
  return (
    <div className="h-screen bg-green-100 overflow-hidden">
      <div className="text-gray-700 text-center bg-gray-300 px-4 py-2">{props.renderHeader()}</div>
      <div className="h-full flex text-gray-700 bg-gray-500">
        {props.renderSideBar()}
        <div className="flex-row bg-blue-200 w-full overflow-auto">{props.renderContent()}</div>
      </div>
    </div>
  );
};

MainLayout.defaultProps = defaultProps;
