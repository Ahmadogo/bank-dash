import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "SL No",
    dataIndex: "slNo",
    key: "slNo",
  },
  {
    title: "Loan Money",
    dataIndex: "loanMoney",
    key: "loanMoney",
  },

  {
    title: "Left to repay",
    dataIndex: "leftToPay",
    key: "leftToPay",
  },
  // {
  //   title: "Duration"
  // },
  // {
  //   title: "Interest rate"
  // },
  // {
  //   title: "Installment"
  // },
  // {
  //   title: "Repay"
  // }
];

const tableData = [
  { slNo: 
    ""
    , loanMoney: "$100,000", leftToPay: 40500 },
  { slNo: "02", loanMoney: "$100000", leftToPay: 40500 },
  { slNo: "03", loanMoney: "$100000", leftToPay: 40500 },
];

const ActiveLoansOverview = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableData}
        pagination={false}
        className=""
      />
    </div>
  );
};

export default ActiveLoansOverview;
