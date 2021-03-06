import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { useDropdown } from '@rmr/use-dropdown';
import { Text } from '../Text';
import ChevronDown from '../../assets/icons/chevron-down.svg';
import ChevronUp from '../../assets/icons/chevron-up.svg';

type Props<T> = {
  value: T | null;
  onSelect(value: T): void;
  items: T[];
  getLabel(item: T): ReactNode;
  getKey(item: T): string | number;
};

export const Select = <T extends unknown>(props: Props<T>) => {
  const { value, onSelect, items, getLabel, getKey } = props;

  const isSSR = typeof document === 'undefined';

  const {
    isOpen,
    setOpen,
    highlightedIndex,
    getWrapperProps,
    getItemProps,
    getMenuProps,
  } = useDropdown({
    items,
    onSelect,
  });

  return (
    <Root {...getWrapperProps()}>
      <Control onClick={() => setOpen(true)} type="button">
        <Label>{value ? getLabel(value) : <span>Select</span>}</Label>
        {isOpen ? <ChevronUp width={16} height={16} /> : <ChevronDown />}
      </Control>
      {isOpen &&
        !isSSR &&
        createPortal(
          <List {...(getMenuProps() as any)}>
            {items.map((item, index) => (
              <ListItem
                key={getKey(item)}
                highlighted={highlightedIndex === index}
                {...getItemProps(item, index)}
              >
                <Text>{getLabel(item)}</Text>
              </ListItem>
            ))}
          </List>,
          document.body,
        )}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

const Control = styled.button`
  display: flex;
  width: 100%;
  border: 1px solid #d8d8d8;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  text-align: left;
`;

const Label = styled.div`
  flex-grow: 1;;
`;

const List = styled.ul`
  margin: 0%;
  padding: 0;
  border: 1px solid #ccc;
  list-style: none;
  z-index: 1;
  background-color: #fff;
`;

const ListItem = styled.li<{ highlighted: boolean }>`
  box-sizing: border-box;
  padding: 4px 8px;
  cursor: default;
  background-color: ${p => (p.highlighted ? '#ededed' : '')};
`;
