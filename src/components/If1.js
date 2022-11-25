const If1 = () => {
    const btnLogin = (isLogin) => {
        if(isLogin === true) {
            return (<button type="button">Logout</button>)
        } else {
            return (<button type="button">Login</button>)
        }
    }
    return (
        <>
            <h1>true / false로 JSX 반환</h1>
            true일때 : {btnLogin(true)}<br />
            false일때 : {btnLogin(false)}
        </>
    )
}

export default If1