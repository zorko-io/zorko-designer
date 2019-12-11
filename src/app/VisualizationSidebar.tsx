import React, {useCallback} from 'react';
import {Option} from '../common/Option';
import {Button} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectVegaLiteSchemaMarkOptions} from '../features/vegaLiteSchema';
import {specMarkEdit} from '../features/specs';
import {selectAnalyticBoardMainSpecId} from '../features/analyticBoard';

interface Props {
    marks?: Option[]
}

const defaultProps: Partial<Props> = {
    marks:[]
};

export const VisualizationSidebar = (props: Props) => {
  const specId = useSelector(selectAnalyticBoardMainSpecId);
  const markOptions = useSelector(selectVegaLiteSchemaMarkOptions);
  const dispatch = useDispatch();
  const changeMark = useCallback((id, mark) => {
    dispatch(specMarkEdit(id, mark))
  }, []);

  return (<>
    {markOptions.map((option,i) => (<Button key={i} onClick={() => {
      console.log('mark', option.value);

      changeMark(specId, option.value);
    }} >{option.label}</Button>))}
  </>)
};

VisualizationSidebar.defaultProps = defaultProps;
