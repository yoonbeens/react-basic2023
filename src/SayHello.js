import React from "react";

//컴포넌트
//컴포넌트 파일은 대문자로 작성하는 것이 관례입니다.
function SayHello(props) {
    return (
        <div>
            <p>안녕</p>
            { props.children }
            <span>메롱</span>
        </div>
    );
}

export default SayHello;