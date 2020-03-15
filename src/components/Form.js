import React from "react";
import { MDBDataTable } from "mdbreact";
const DatatablePage = () => {
  return (
    <MDBDataTable data="http://10.11.1.207:4000/api/flights/1/passengers" />
  );
};
export default DatatablePage;
