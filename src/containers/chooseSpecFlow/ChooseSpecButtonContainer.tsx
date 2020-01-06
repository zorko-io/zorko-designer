import React, {useCallback} from 'react';
import {Dialog} from '@reach/dialog';
import '@reach/dialog/styles.css';
import {Button} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {selectRepositoriesAll} from '../../selectors/repositoriesSelectors';
import {chooseSpecFlow} from '../../effects/chooseSpecFlowEffects';
import {chooseSpecFlowOpenSpecs} from '../../features/chooseSpecFlow';

export const ChooseSpecButtonContainer = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositoriesAll);
  const [showDialog, setShowDialog] = React.useState(false);
  const open = useCallback(() => {
    dispatch(chooseSpecFlowOpenSpecs());
    setShowDialog(true);
  }, [dispatch]);
  const close = useCallback(() => {
    setShowDialog(false);
  }, []);
  const chooseSpec = useCallback(
    spec => {
      dispatch(chooseSpecFlow(spec.name));
      close();
    },
    [close, dispatch]
  );

  return (
    <>
      <Button
        onClick={() => {
          open();
        }}
      >
        Open
      </Button>
      <Dialog aria-label="Choose specification" isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <span aria-hidden>×</span>
        </button>
        {repositories.map((repo, i) => {
          const repository = repo;
          const collections = repository.resources;

          return (
            <div key={i}>
              <div>{`Repository: ${repository.name}`}</div>
              {collections.map(collection => {
                const groups = collection.resources;

                return (
                  <div key={collection.id}>
                    <div>{`Collection: ${collection.name}`}</div>
                    {groups.map(group => {
                      const resources = group.resources;

                      return (
                        <div key={group.id}>
                          <div>{`Group: ${group.name}`}</div>
                          {resources.map((resource, index) => {
                            const spec = resource;

                            return (
                              <div
                                key={index}
                                onClick={() => {
                                  chooseSpec(spec);
                                }}
                              >
                                <div>{spec.description}</div>
                                <div>{spec.title}</div>
                                <img
                                  src={`/images/examples/vl/${spec.name}.vl.png`}
                                  alt={'Example Chart'}
                                />
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </Dialog>
    </>
  );
};
