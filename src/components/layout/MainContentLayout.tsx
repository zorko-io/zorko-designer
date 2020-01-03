import React, {ReactNode} from 'react';

interface Props {
  renderCanvasBoard: () => ReactNode;
}

const defaultProps: Partial<Props> = {
  renderCanvasBoard: () => null
};

export const MainContentLayout = (props: Props) => {
  return (
    <div className="flex-row bg-blue-200 w-full overflow-auto">{props.renderCanvasBoard()}</div>
  );
};

MainContentLayout.defaultProps = defaultProps;
