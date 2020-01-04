import React from 'react';
import {VegaLiteTopLevelUnitSpec} from '../../packages/coreTypes/types';
import {useSelector} from 'react-redux';
import {selectAnalyticBoardMainSpec} from '../../selectors/analyticBoardSelectors';
import {AnalyticWidget} from '../../components/AnalyticWidget';
import {EncodingContainer} from './EncodingContainer';

interface Props {
  selectedSpec?: VegaLiteTopLevelUnitSpec;
}

const defaultProps: Partial<Props> = {
  selectedSpec: null
};

export const AnalyticBoard = () => {
  const spec = useSelector(selectAnalyticBoardMainSpec);

  return (
    <>
      <EncodingContainer />
      <AnalyticWidget spec={spec} />
    </>
  );
};

AnalyticBoard.defaultProps = defaultProps;
