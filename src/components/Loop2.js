const Loop2 = () => {
    const myArray = ["Hello", "World"];

    const listMap = myArray.map((v, i) => {
        return (<li key={i}>{v}</li>)
    })
    
    return (
        <>
            <h1>Map 함수로 배열 반복문돌리기</h1>
            <ul>
                {listMap}
            </ul>
        </>
    )
}

export default Loop2;