import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

const CandidatList = ({ dataSource, columns }) => {
  return <Table dataSource={dataSource} columns={columns} />;
};

CandidatList.propTypes = {
  dataSource: PropTypes.arrayOf(
    PropTypes.object({
      key: PropTypes.string,
      name: PropTypes.string,
      age: PropTypes.number,
      address: PropTypes.string
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.object({
      key: PropTypes.string,
      title: PropTypes.string,
      dataIndex: PropTypes.number
    })
  )
};

export default CandidatList;
