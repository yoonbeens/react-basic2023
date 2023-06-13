import React, { useState } from 'react'

const NickName = () => {

    //useState 훅은 배열을 리턴하는데,
    //0번에는 상태변수값, 1번에는 상태변수값을 변경할 수 있는 setter함수가 제공됨.

    //useState의 리턴 타입이 배열이기 때문에 구조분해할당을 통해 쉽게 이름지어 사용 가능
    //(관례적으로 상태변수값, set상태변수값으로 이름을 짓는다)
    const [nickName, setNickName] = useState('김철수');

    // let nickName = '김철수';

    const changeNickname = e => {
        console.log('changeNickname called!!!');
        //nickName = '척척박사';
        setNickName('척척박사'); //useState의 setter를 호출해서 상태변수의 값 변경
        console.log('nickName:' + nickName);
    }

  return (
    <>
        <h1>Hello ~~~ {nickName} </h1>
        <button className='btn' onClick={changeNickname}>버튼</button>
        <button className='btn' onClick={() => setNickName('척척석사')}>버튼2</button>
    </>
  );



}

export default NickName;