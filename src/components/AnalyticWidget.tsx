import React, {useMemo} from 'react';
import {VegaLite} from 'react-vega';
import _ from 'lodash';

interface Props {
  spec: object;
}

const defaultProps: Partial<Props> = {
  spec: null
};

export const AnalyticWidget = (props: Props) => {
  const spec = useMemo(() => {
    // because vega modify spec prop internally
    return _.cloneDeep(props.spec)
  } , [props.spec]);

  return <VegaLite spec={spec} />;
};

AnalyticWidget.defaultProps = defaultProps;
