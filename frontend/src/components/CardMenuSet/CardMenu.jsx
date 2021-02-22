import React from 'react'
import {
    Container,
    Row,
    Card,
    CardDeck,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardMenuStyles.css'

const CardMenu = () => {
    return (
        <Container><Row>
            <CardDeck className='card-deck'>
                <Card border='primary'>
                    <Card.Body>
                        <Card.Title className='title'>Dịch vụ</Card.Title>
                        <Card.Text className='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, molestias commodi corporis enim beatae sapiente.</Card.Text>
                        <Link to='/farmer'>
                            <Button variant="success" className="btn-explore btn-md m-2">Xem thêm</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card border='primary'>
                    <Card.Body>
                        <Card.Title className='title'>Sản phẩm thiên văn</Card.Title>
                        <Card.Text className='card-text'>
                            Cung cấp các sản phẩm thiên văn phục vụ cho học tập, nghiên cứu, giải trí, đồ lưu niệm,...
                        </Card.Text>
                        <Link to='login?redirect=supplier'>
                            <Button variant="success" className="btn-explore btn-md m-2">Xem thêm</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card border='primary'>
                    <Card.Body>
                        <Card.Title className='title'>Liên hệ</Card.Title>
                        <Card.Text className='card-text'>
                            Hãy liên hệ với tôi những sản phẩm, thiết bị thiên văn, tư liệu bạn cần tôi sẽ cung cấp nó cho bạn 
                        </Card.Text>
                        <Link to='/san-pham-thien-vanr'>
                            <Button variant="success" className="btn-explore btn-md m-2">Xem thêm</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Row></Container>
    )
}

export default CardMenu
