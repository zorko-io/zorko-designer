import React from 'react';
import {VegaLiteTopLevelUnitSpec} from '../../../common/types';
import {useSelector} from 'react-redux';
import {selectAnalyticBoardMainSpec} from '../selectors';
import {AnalyticWidget} from '../../../components/AnalyticWidget';

interface Props {
  selectedSpec?: VegaLiteTopLevelUnitSpec;
}

const defaultProps: Partial<Props> = {
  selectedSpec: null
};

export const AnalyticBoard = () => {
  const spec = useSelector(selectAnalyticBoardMainSpec);

  return <AnalyticWidget spec={spec} />;
};

AnalyticBoard.defaultProps = defaultProps;
