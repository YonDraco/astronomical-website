import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "./../Message/Message";
import Loader from "./../Loader/Loader";
import FormContainer from "./../FormContainer/FormContainer";
import {
  updateSupplierProduct,
  getroductsDetails,
} from "./../../actions/supplierProduct";
import { SUPPLIER_PRODUCT_UPDATE_RESET } from "./../../constants/supplierConstant";
import Meta from "../Helmet/Meta";

const SupplierProductEdit = ({ match }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cropSelection, setCropSelection] = useState("");
  const [storage, setStorage] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [uploading, setUploading] = useState(false);

  const productId = match.params.id;

  const dispatch = useDispatch();
  let history = useHistory();

  const FarmerProductDetails = useSelector(
    (state) => state.FarmerProductDetails
  );
  const { loading, product, error } = FarmerProductDetails;

  const farmerProductUpdate = useSelector((state) => state.farmerProductUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = farmerProductUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SUPPLIER_PRODUCT_UPDATE_RESET });
      history.push("/profile");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(getroductsDetails(productId));
      } else {
        setName(product.name);
        setDescription(product.description);
        setEmail(product.email);
        setAddress(product.address);
        setImage(product.image);
        setCropSelection(product.cropSelection);
        setStorage(product.storage);
        setPhonenumber(product.phonenumber);
      }
    }
  }, [history, product, dispatch, productId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateSupplierProduct({
        _id: productId,
        name,
        email,
        address,
        cropSelection,
        storage,
        image,
        phonenumber,
        description,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <Container style={{ marginBottom: "50px" }}>
      <Meta title="Yon | Sửa nguồn cung cấp" />
      <FormContainer>
        <h2 style={{ marginTop: "100px", textAlign: "center" }}>
          Hồ sơ sản phẩm
        </h2>
        <Link to="/profile" className="btn btn-light my-3">
          Quay lại
        </Link>
        {loading && <Loader />}
        {error && <Message variant="danger">{error}</Message>}
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {successUpdate && (
          <Message variant="success">Hồ sơ đã được cập nhật!</Message>
        )}
        <Form onSubmit={submitHandler}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="name">
                <Form.Label>
                  Họ tên <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Nhập họ tên"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>
                  Email <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>
                  Địa chỉ <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="address"
                  as="textarea"
                  rows={1}
                  placeholder="Nhập địa chỉ"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="cropSelection">
                <Form.Label>
                  Lựa chọn sản phẩm <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="cropSelection"
                  placeholder="Nhap lựa chọn sản phẩm"
                  value={cropSelection}
                  required
                  onChange={(e) => setCropSelection(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="storage">
                <Form.Label>
                  Số lượng sản phẩm <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="storage"
                  placeholder="Nhập số lượng "
                  value={storage}
                  required
                  onChange={(e) => setStorage(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="image">
                <Form.Label>
                  Ảnh <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Đường dẫn ảnh"
                  value={image}
                  required
                  onChange={(e) => setImage(e.target.value)}
                ></Form.Control>
                <Form.File
                  id="image-file"
                  label="Choose File"
                  custom
                  onChange={uploadFileHandler}
                ></Form.File>
                {uploading && <Loader />}
              </Form.Group>
              <Form.Group controlId="phonenumber">
                <Form.Label>
                  Số điện thoại <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="phonenumber"
                  placeholder="Nhập số điện thoại"
                  value={phonenumber}
                  required
                  onChange={(e) => setPhonenumber(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>
                  Mô tả <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="description"
                  placeholder="Nhập mô tả"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <br />
              <Button type="submit" variant="primary">
                OK
              </Button>
            </Col>
          </Row>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SupplierProductEdit;
