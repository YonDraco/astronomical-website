import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "./ourSerices.css";

const OurServices = () => {
  return (
    <Container className="main" fluid>
      <h1 className="main-title">ĐÁNG CHÚ Ý</h1>
      <p className="description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        corporis rerum placeat eius. At odio laboriosam, dolorem ipsam obcaecati
        optio eius officiis, inventore odit ratione itaque quas impedit
        consequuntur! Saepe. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum corporis rerum placeat eius. At odio laboriosam, dolorem
        ipsam obcaecati optio eius officiis, inventore odit ratione itaque quas
        impedit consequuntur! Saepe.
      </p>
      <Container className="services">
        <Row>
          <Col md={3}>
            <h5 className="sub-title">Mặt trăng</h5>
            <Image className="img" src="images/services/s1.png" fluid />
            <p className="sub-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum corporis rerum placeat eius.!!
            </p>
          </Col>
          <Col md={3}>
            <h5 className="sub-title">Sao Hoả</h5>
            <Image className="img" src="images/services/s2.png" fluid />
            <p className="sub-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum corporis rerum placeat eius.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="sub-title">Tàu vũ trụ</h5>
            <Image className="img" src="images/services/s3.png" fluid />
            <p className="sub-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum corporis rerum placeat eius.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="sub-title">Phi hành gia</h5>
            <Image className="img" src="images/services/s4.png" fluid />
            <p className="sub-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum corporis rerum placeat eius.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OurServices;
