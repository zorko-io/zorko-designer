import React from 'react';
import {Menu, MenuButton, MenuItem, MenuLink, MenuList} from '@reach/menu-button';
import '@reach/menu-button/styles.css';
import _ from 'lodash';

export const EncodingContainer = () => {
  return (
    <div>
      <Menu>
        <MenuButton className={'btn btn-default'}>X channel</MenuButton>
        <MenuList>
          <MenuItem onSelect={_.noop}>Download</MenuItem>
          <MenuLink to="view">View</MenuLink>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton className={'btn btn-default'}>Y channel</MenuButton>
        <MenuList>
          <MenuItem onSelect={_.noop}>Download</MenuItem>
          <MenuLink to="view">View</MenuLink>
        </MenuList>
      </Menu>
    </div>
  );
};
