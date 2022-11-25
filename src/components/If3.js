const If3 = () => {
    const articleList = undefined;
    return (
        <>
            <h1>조건식과 || 연산자 사용</h1>
            {/* undefined, null, 0, false, ""(빈문자열) 중 하나를 return 할 경우 정상적인 화면 렌더링이 이루어지지 않음 */}
            {articleList || <p>조회된 게시글이 없습니다.</p>}
        </>
    )
}

export default If3