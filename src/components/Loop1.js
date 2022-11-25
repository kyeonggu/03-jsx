const Loop1 = () => {
    const listItem = (itemNum) => {
        let li = [];

        for(var i=1; i<=itemNum; i++) {
            li.push(<li key={i}>Item {i}</li>)
        }

        return li
    }
    return (
        <>
            <h1>for문으로 li 배열을 생성하여 push하여 반환하는 방식</h1>
            <ul>
                {listItem(5)}
            </ul>
        </>
    )
}

export default Loop1;