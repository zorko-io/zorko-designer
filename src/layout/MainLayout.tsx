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
      {props.renderHeader()}
      <div className="h-full flex text-gray-700 bg-gray-500">
        {props.renderSideBar()}
        {props.renderContent()}
      </div>
    </div>
  );
};

MainLayout.defaultProps = defaultProps;
