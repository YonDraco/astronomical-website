import React from "react";
import { Container, Row, CardDeck, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Meta from "../../components/Helmet/Meta";
import "./FarmerStyle.css";

const FarmerScreen = () => {
  return (
    <div>
      <Meta title="Yon | Dịch vụ" />
      <Container className="farmerContainer">
        <h1 className="title">Dịch vụ</h1>
        <h4 className="farmer-title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
          consequuntur suscipit labore impedit porro numquam animi modi
          laudantium esse? Deserunt sequi perferendis et reprehenderit,
          laboriosam quidem quo natus libero neque!
        </h4>
        <Row className="row-one justify">
          <CardDeck>
            <Card border="primary" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title className="card-titile">
                Sản phẩm nổi bật
                </Card.Title>
                <LinkContainer to="/dich-vu/purchaseSeeds">
                  <Button className="btn-explore btn-md m-2">
                    Xem thêm
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title className="card-titile">
                  Liên hệ đặt hàng sản phẩm
                </Card.Title>
                <LinkContainer to="/login?redirect=supplier">
                  <Button className="btn-explore btn-md m-2">
                  Xem thêm
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: "25rem" }}>
              <Card.Body>
                <Card.Title className="card-titile">
                  Các thiết bị thiên văn
                </Card.Title>
                <LinkContainer to="/dich-vu/lendMachines">
                  <Button className="btn-explore btn-md m-2">
                  Xem thêm
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default FarmerScreen;
