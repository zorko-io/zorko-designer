import React, {ReactNode} from 'react';

interface Props {
  renderContent?: () => ReactNode;
}

const defaultProps: Partial<Props> = {
  renderContent: () => null
};

export const HeaderLayout = (props: Props) => {
  return <div className="text-gray-700 bg-gray-300 px-4 py-2">{props.renderContent()}</div>;
};

HeaderLayout.defaultProps = defaultProps;
