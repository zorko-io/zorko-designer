import React from 'react';
import {Option} from '../common/Option';
import {Button} from '../components';
import {useSelector} from 'react-redux';
import {selectVegaLiteSchemaMarkOptions} from '../features/vegaLiteSchema';

interface Props {
    marks?: Option[]
}

const defaultProps: Partial<Props> = {
    marks:[]
};

export const VisualizationSidebar = (props: Props) => {
  const markOptions = useSelector(selectVegaLiteSchemaMarkOptions);

  return (<>
    {markOptions.map((option,i) => (<Button key={i} onClick={() => {
      console.log('mark', option.value);
    }} >{option.label}</Button>))}
  </>)
};

VisualizationSidebar.defaultProps = defaultProps;
