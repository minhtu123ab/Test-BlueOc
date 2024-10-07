import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const columns: ColumnsType<IPost> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "UserId",
    dataIndex: "userId",
    key: "userId",
    align: "center",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text: string) => (
      <span
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "400px",
          display: "inline-block",
        }}
      >
        {text}
      </span>
    ),
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
    render: (text: string) => (
      <span
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "400px",
          display: "inline-block",
        }}
      >
        {text}
      </span>
    ),
  },
];

interface tablePostsProps {
  data: IPost[];
}

const TablePosts: React.FC<tablePostsProps> = ({ data }) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey="id"
      pagination={{
        pageSize: 5,
        showSizeChanger: false,
      }}
      bordered={true}
    />
  );
};

export default TablePosts;
