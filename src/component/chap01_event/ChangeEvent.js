import React from 'react'

const ChangeEvent = () => {

    const changeValue = e => {
        console.log(`value: ${e.target.value}`);
    }

  return (
    <>
        <input type='text' onChange={ changeValue } />

        <select onChange={ changeValue }>
            <option value='pizza'>피자</option>
            <option value='chicken'>치킨</option>
            <option value='pasta'>파스타</option>

        </select>

    </>
  );
}

export default ChangeEvent;