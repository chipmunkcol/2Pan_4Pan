// src/App.js
import styled from "styled-components";
// import React from "react";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.
// import Router from "./shared/Router";


const App = () => {
  // const  detail  = useSelector((state) => state.detail);
  
  const [details, setDetails] = useState({     // POST 요청 details // // 추가하기 //
    title: "",
    
    
  });
  const [getdetail, setGetDetail] = useState(null);  // GET 요청 detail // // 조회하기 //
  console.log(getdetail);
  const [targetId, setTargetId] = useState(null);  // PATCH 요청 
  const [editTodo, setEditTodo] = useState({
    title: "",
  });
	
  // const fetchDetail = async () => {
  //     const { data } = await axios.get("http://localhost:3001/detail");  // GET
  //     setDetail(data); 
  //   };
  //   useEffect(() => {
  //   fetchDetail("http://localhost:3001/detail")
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setDetail(data);
  //   });
  // }, []);  
  
  const fetchDetail = async () => {
    const { data } = await axios.get("http://localhost:3001/detail");  // GET
    setGetDetail(data); 
  };
  useEffect(() => {
    fetchDetail();
  }, []);

	
  const onSubmitHandler = (details) => {
    axios.post("http://localhost:3001/detail", details);    // POST
  };

  const onClickDeleteButtonHandler = (detailsId) => {
    axios.delete(`http://localhost:3001/detail/${detailsId}`);   // DELETE
  };
  
  const onClickEditButtonHandler = (detailsId, edit) => {
    axios.patch(`http://localhost:3001/detail/${detailsId}`, edit);  // PATCH
  };
  
  return (
      <>
        <form
        onSubmit={(e) => {
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
        <Image_Container>
          <Image_Title>
            title
          </Image_Title>
        </Image_Container>
        <Info_Container>
          
          <Info_Title>
            info
          </Info_Title>
          {/* <input
              type="text"
              placeholder="제목을 입력해주세요."
              onChange={(ev) => {
                setTargetId(ev.target.value);
              }}
            />
            <input
            type="text"
            placeholder="내용을 입력해주세요."
            onChange={(ev) => {
              setEditTodo({
                ...editTodo,
                title: ev.target.value,
              });
            }} */}
          {/* /> */}
          {/* <button
						// type='button' 을 추가해야 form의 영향에서 벗어남
            type="button"
            onClick={() => onClickEditButtonHandler(targetId, editTodo)}
          >
            수정하기
          </button> */}
          <div>
            {getdetail?.map((details) => (
          <div key={details.id}>
            
            <div>
              <Info_FormLabel>Title: {details.title}</Info_FormLabel>
              <Info_FormLabel>Content: {details.content}</Info_FormLabel>
            </div>
          </div>
        ))}
          </div>
        </Info_Container>
        
        {/* <Router />; */}
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

const Info_FormLabel = styled.form`
  font-size: 14px;
  padding: 0 20px;
  margin : 15px;
`;

