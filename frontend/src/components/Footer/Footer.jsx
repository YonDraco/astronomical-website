import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Form, Button } from "react-bootstrap";

import "./Footer.css";

const Footer = () => {
  return (
    <BrowserRouter>
      <MDBFooter
        color="blue-grey"
        className="page-footer font-small lighten-5 pt-0"
      >
        <div style={{ backgroundColor: "#2f4768" }}>
          <MDBContainer>
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 " style={{ color: "white" }}>
                  {" "}
                  Kết nối với tôi trên mạng xã hội!
                </h6>
              </MDBCol>
              <MDBCol md="6" lg="7" className="text-center text-md-right">
                <a href="https://www.facebook.com/HoangThiHoa.YonDraco">
                  <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                </a>
                <a href="https://twitter.com/yondraco">
                  <i className="fab fa-twitter white-text mr-lg-4"> </i>
                </a>
                <Link to="/" className="gplus-ic">
                  <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                </Link>
                <Link to="/" className="li-ic">
                  <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                </Link>
                <Link to="/" className="ins-ic">
                  <i className="fab fa-instagram white-text mr-lg-4"> </i>
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="3    " xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Astronomical Website</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Trang web cung cấp thông tin về các hành tinh trong hệ mặt trời
                và bán một số sản phẩm thiên văn học
              </p>
            </MDBCol>
            <MDBCol md="2" lg="2" xl="2" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Liên kết</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <Link to="/dich-vu" className="dark-grey-text">
                  Dịch vụ
                </Link>
              </p>
              <p>
                <Link to="/san-pham-thien-van" className="dark-grey-text">
                  Sản phẩm thiên văn{" "}
                </Link>
              </p>
              <p>
                <Link to="/lien-he" className="dark-grey-text">
                  Liên hệ
                </Link>
              </p>
              <p>
                <Link to="/cart" className="dark-grey-text">
                  Giỏ hàng
                </Link>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="3" xl="4" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Thông tin liên lạc</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fa fa-home mr-3" />
                Bắc Ninh, Việt Nam
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> hth.it.mm@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" />
                0964584027
              </p>
            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Ý kiến đóng góp</strong>
              </h6>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Nội dung</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    placeholder="Nhập nội dung đóng góp..."
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Gửi
                </Button>
              </Form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
        </div>
      </MDBFooter>
    </BrowserRouter>
  );
};

export default Footer;
