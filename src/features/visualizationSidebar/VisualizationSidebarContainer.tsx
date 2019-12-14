import React, {useCallback} from 'react';
import {Option} from '../../common/Option';
import {Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectVegaLiteSchemaMarkOptions} from '../vegaLiteSchema';
import {specMarkEdit} from '../specs';
import {selectAnalyticBoardMainSpecId} from '../analyticBoard';
import {DataSourceFieldListContainer} from '../dataSourceMetadata/components/DataSourceFieldListContainer';

interface Props {
    marks?: Option<any>[]
}

const defaultProps: Partial<Props> = {
    marks:[]
};

export const VisualizationSidebarContainer = (props: Props) => {
  const specId = useSelector(selectAnalyticBoardMainSpecId);
  const markOptions = useSelector(selectVegaLiteSchemaMarkOptions);
  const dispatch = useDispatch();
  const changeMark = useCallback((id, mark) => {
    dispatch(specMarkEdit(id, mark))
  }, []);

  return (<>
    <div>
      <div>Marks: </div>
      {markOptions.map((option,i) => (<Button key={i} onClick={() => {
        changeMark(specId, option.value);
      }} >{option.label}</Button>))}
    </div>
    <div>
      <div>Fields: </div>
      <DataSourceFieldListContainer />
    </div>
  </>)
};

VisualizationSidebarContainer.defaultProps = defaultProps;
