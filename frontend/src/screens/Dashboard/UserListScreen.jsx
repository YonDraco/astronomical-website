import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserList from '../../components/DashBoard/UserList/UserList'
import Meta from '../../components/Helmet/Meta'
import SideBarComponents from '../../components/SideBar/SideBarComponents'

const UserListScreen = () => {
    return (
        <div style={{ marginTop: "110px" }}>
            <Meta
                title="Yon | Admin Người dùng"
            />
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <h4>Người dùng</h4>
                    </Col>
                    <Col md={9}>
                        <h4 style={{ marginLeft: "30px" }}>Danh sách người dùng</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <SideBarComponents />
                    </Col>
                    <Col md={9}>
                        <UserList />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserListScreen
