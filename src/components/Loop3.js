const Loop3 = () => {
    const seasons = ["봄", "여름", "가을", "겨울"]
    return (
        <>
            <h1>리턴문 안에서 map 함수 사용하기</h1>
            <table>
                <thead>
                    <tr>
                        <td>순번</td>
                        <th>계절</th>
                    </tr>
                </thead>
                <tbody>
                    { seasons.length > 0                                // seasons 배열의 갯수가 0개 이상일때 
                    ? (seasons.map((v, i) => {
                                <tr key={i}>
                                    <th>{i}</th>
                                    <td>{v}</td>
                                </tr>
                        }))
                        :  (
                            <tr>
                                <td colspan="4">데이터가 없습니다.</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            
            {seasons.map((v, i) => (            // 화살표 함수를 () 로하면 return을 쓸 필요가 없음
                <p key={i}>{v}</p>
            ))}

            {seasons.map((v, i) => {
                return <p key={i}>{v}</p>       // 화살표 함수를 {} 로 하면 return을 써야됨
            })}
        </>
    )
}

export default Loop3;