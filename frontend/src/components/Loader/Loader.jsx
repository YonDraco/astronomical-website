import React, { useState } from 'react'
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

//  đảm bảo mỗi cặp khóa-giá trị kết thúc bằng;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #15aabf;
`;

const Loader = () => {

    let [loading] = useState(true);
    let [color] = useState("#15aabf");

    return (
        <div className="sweet-loading">
            <PuffLoader color={color} loading={loading} css={override} size={100} />
        </div>
    )
}

export default Loader
