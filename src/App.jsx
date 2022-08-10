// src/App.js
import styled from "styled-components";
// import React from "react";
// import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const App = () => {
  
  const [details, setDetails] = useState({     // POST 요청 // // 추가하기 //
    title: "",
    
  });
  const [detail, setDetail] = useState(null);  // GET 요청 // // 조회하기 //

	// axios를 통해서 get 요청을 하는 함수를 생성합니다.
	// 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchDetail = async () => {
    const { data } = await axios.get("http://localhost:3001/detail");
    setDetail(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };
	
	// 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
		// effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchDetail();
  }, []);

	// data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
  console.log(detail); // App.js:16

  const onSubmitHandler = (details) => {
    axios.post("http://localhost:3001/detail", details);
  };

  const onClickDeleteButtonHandler = (detailsId) => {
    axios.delete(`http://localhost:3001/detail/${detailsId}`);
  };  
  
  return (
        
        
        <>
        <form
        onSubmit={(e) => {
					// 👇 submit했을 때 브라우저의 새로고침을 방지합니다. 
          e.preventDefault();
          onSubmitHandler(details);
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setDetails({
              ...details,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {/* {detail?.map((details) => { */}
          {/* // <div key={details.id}>{details.title}</div>         // 주석 처리 풀면 에러 // */}
          {/* console.log(details);
        })} */}
        
            <button
              type="button"
              onClick={() => onClickDeleteButtonHandler(details.id)}
            >
              삭제하기
            </button>
          
        
      </div>

        <Image_Container>
          <Image_Title>
            title
          </Image_Title>
        </Image_Container>
        <Info_Container>
          <Info_Title>
            info
          </Info_Title>
        </Info_Container>
        </>
  );
};

export default App;

const Image_Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 496px;
  height: 339px;
  left: 240px;
  top: 120px;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

const Image_Title = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
`;

const Info_Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 496px;
  height: 201px;
  left: 240px;
  top: 483px;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`;

const Info_Title = styled.div`
  display: flex;
  height: 30px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
  background: linear-gradient(180deg, #FFFFFF -12.5%, #E3E3E3 100%);
`;  



