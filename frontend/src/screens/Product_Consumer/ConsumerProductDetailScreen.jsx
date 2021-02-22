import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import "./consumerStyles.css";

import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import { listConsumerProductsDetails } from "../../actions/consumerProductAction.js";
import Meta from "../../components/Helmet/Meta";

const ConsumerProductDetailScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const consumerProductDetails = useSelector(
    (state) => state.consumerProductDetails
  );
  const { loading, error, consumerProduct } = consumerProductDetails;

  useEffect(() => {
    dispatch(listConsumerProductsDetails(match.params.id));
  }, [dispatch, match]);

  const addtoCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <div className="productScreen">
      <Meta title="Yon | san-pham-thien-van" />
      <Container>
        <Link className="btn btn-go-back btn-dark" to="/san-pham-thien-van">
          Quay lại
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row className="p-3 seed-product">
            <Col md={6}>
              <Image
                className="mx-auto image-seed"
                src={consumerProduct.image}
                alt={consumerProduct.prod_name}
                width={300}
              />
            </Col>
            <Col md={3}>
              <ListGroup className="borderless" variant="flush">
                <ListGroup.Item>
                  <h2>{consumerProduct.prod_name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Người bán: {consumerProduct.seller_name}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h4>Giá: {consumerProduct.price}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>
                    Xuất xứ: {consumerProduct.avalaible_location}
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Giá:</Col>
                      <Col>
                        <strong>{consumerProduct.price}VND</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Trạng thái:</Col>
                      <Col>
                        {consumerProduct.quantity > 0
                          ? "Còn sản phẩm"
                          : "Đã hết"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {consumerProduct.quantity > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Số lượng</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(consumerProduct.quantity).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={addtoCartHandler}
                    >
                      Thêm vào giỏ
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ConsumerProductDetailScreen;
