const If4 = () => {
    const isLogin = true;
    return (
        <>
          <h1>삼항연산자</h1>
          {isLogin
          ? (<button type="button">로그아웃</button>)
          : (<button type="button">로그인</button>)
          }
        </>
    )
}

export default If4