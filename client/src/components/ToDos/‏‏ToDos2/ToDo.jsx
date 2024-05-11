import React, { useState } from 'react';
import { Space, Table, Tag, Transfer } from 'antd';
// Customize Table Transfer
const TableTransfer = ({ leftColumns, rightColumns, ...restProps }) => (
  <Transfer {...restProps}>
    {({
      direction,
      filteredItems,
      onItemSelect,
      onItemSelectAll,
      selectedKeys: listSelectedKeys,
      disabled: listDisabled,
    }) => {
      const columns = direction === 'left' ? leftColumns : rightColumns;
      const rowSelection = {
        getCheckboxProps: () => ({
          disabled: listDisabled,
        }),
        onChange(selectedRowKeys) {
          onItemSelectAll(selectedRowKeys, 'replace');
        },
        selectedRowKeys: listSelectedKeys,
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
      };
      return (
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredItems}
          size="small"
          style={{
            pointerEvents: listDisabled ? 'none' : undefined,
          }}
          onRow={({ key, disabled: itemDisabled }) => ({
            onClick: () => {
              if (itemDisabled || listDisabled) {
                return;
              }
              onItemSelect(key, !listSelectedKeys.includes(key));
            },
          })}
        />
      );
    }}
  </Transfer>
);
const columns = [
  {
    dataIndex: 'theToDo',
    title: 'The To Do',
  },
  {
    dataIndex: 'tag',
    title: 'Tag',
    render: (tag) => (
      <Tag
        style={{
          marginInlineEnd: 0,
        }}
        color="cyan"
      >
        {tag.toUpperCase()}
      </Tag>
    ),
  },
  {
    dataIndex: 'description',
    title: 'Description',
  },
];

const ToDo = ({whatToDo}) => {
  const [targetKeys, setTargetKeys] = useState([]);

  const onChange = (nextTargetKeys) => {
    setTargetKeys(nextTargetKeys);
  };

  return (
    <>
      <TableTransfer
        dataSource={whatToDo}
        targetKeys={targetKeys}
        showSearch
        showSelectAll={false}
        onChange={onChange}
        filterOption={(inputValue, item) =>
          item.title.indexOf(inputValue) !== -1 || item.tag.indexOf(inputValue) !== -1
        }
        leftColumns={columns}
        rightColumns={columns}
      />
      <Space
        style={{
          marginTop: 16,
        }}
      >
      </Space>
    </>
  );
};
export default ToDo;
