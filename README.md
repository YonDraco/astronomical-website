## Project "Phát triển web front-end 2" và "Phát triển web back-end"
website cung cấp một số thông tin và bán các sản phẩm liên quan đến thiên văn

### Install dependencies (frontend & backend)
    cd frontend
    npm install
    cd backend
    npm install
    
### Frond end: (3000)
  + "Thêm file .env"
  `REACT_APP_GOOGLE_KEY = `
  
### Back end: (5000)
  + "Thêm file .env"
    `NODE_ENV = development`
    `JWT_SECRET = yondraco`
    `PAYPAL_CLIENT_ID = yourpaypalclientid`
  + "Kết nối Mongodb"
    `Thêm uri mongodb tại file "db.js" trong folder "config"`

### Import data
`npm run data:import`

### Destroy data
`npm run data:destroy`

### Run App
+ Frondend: `npm start`
+ Backend: `node server.js`

### Demo
![trang-chu](https://github.com/YonDraco/astronomical-website/blob/main/demo/trangchu.png)
![dich-vu](https://github.com/YonDraco/astronomical-website/blob/main/demo/dichvu.png)
![san-pham-thien-van](https://github.com/YonDraco/astronomical-website/blob/main/demo/sanphamthienvan.png)
![san-pham-noi-bat](https://github.com/YonDraco/astronomical-website/blob/main/demo/sanphamnoibat.png)
![thiet-bi](https://github.com/YonDraco/astronomical-website/blob/main/demo/thietbi.png)
