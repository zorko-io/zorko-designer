import React, {ReactNode} from 'react';

interface Props {
  renderMenubar?: () => ReactNode;
  renderContent?: () => ReactNode;
}

const defaultProps: Partial<Props> = {
  renderMenubar: () => null,
  renderContent: () => null
};

export const SidebarLayout = (props: Props) => {
  return (
    <>
      <div className="flex-row bg-green-400 py-2 w-12">{props.renderMenubar()}</div>
      <div
        className="flex-row bg-yellow-200 overflow-x-hidden overflow-y-auto"
        style={{width: '20rem'}}
      >
        {props.renderContent()}
      </div>
    </>
  );
};

SidebarLayout.defaultProps = defaultProps;
