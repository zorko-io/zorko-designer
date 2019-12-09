import React from 'react';
import {VegaLite} from 'react-vega';

interface Props {
  spec: object;
}

const defaultProps: Partial<Props> = {
  spec: null
};

export const AnalyticWidget = (props: Props) => {
  return <VegaLite spec={props.spec} />;
};

AnalyticWidget.defaultProps = defaultProps;
