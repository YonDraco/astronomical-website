import React from "react";
import { Container } from "react-bootstrap";
import Meta from "../../components/Helmet/Meta";
import AddSupplierProduct from "../../components/SupplierProduct/AddSupplierProduct";
import "./supplierStyles.css";

const SupplierScreen = () => {
  return (
    <Container className="supplierContainer">
      <Meta title="Yon | Liên hệ" />
      <h1 className="title">Liên hệ</h1>
      <h4 className="supplier-title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas repellat
        magnam natus ratione, totam deleniti hic, impedit dolor quam nihil
        aperiam et, sint ullam nesciunt accusamus? Porro in ab ipsum.
      </h4>
      <br />
      <AddSupplierProduct />
    </Container>
  );
};

export default SupplierScreen;
