import React, {useCallback} from 'react';
import {Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {specMarkEdit} from '../specs';
import {DataSourceFieldListContainer} from '../dataSourceMetadata/components/DataSourceFieldListContainer';
import {selectVegaLiteSchemaMarkOptions} from '../../selectors/vegaLiteSchemaSelectors';
import {selectAnalyticBoardMainSpecId} from '../../selectors/analyticBoardSelectors';

export const VisualizationSidebarContainer = () => {
  const specId = useSelector(selectAnalyticBoardMainSpecId);
  const markOptions = useSelector(selectVegaLiteSchemaMarkOptions);
  const dispatch = useDispatch();
  const changeMark = useCallback(
    (id, mark) => {
      dispatch(specMarkEdit(id, mark));
    },
    [dispatch]
  );

  return (
    <>
      <div>
        <div>Marks: </div>
        {markOptions.map((option, i) => (
          <Button
            key={i}
            onClick={() => {
              changeMark(specId, option.value);
            }}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div>
        <div>Fields: </div>
        <DataSourceFieldListContainer />
      </div>
    </>
  );
};
