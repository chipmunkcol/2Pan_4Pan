import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import Card from "./Card"
import { __getTodos } from "../store";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios"
import main_logo from "../img/logo.png"


const Main = () => {


  const { isLoading, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return (
      <StWrapper>
        <h1>로딩중!</h1>
      </StWrapper>
    )
  } else {

    return (
      <>
        <GlobalStyle />
        <StHeader>
          <img src={main_logo} style={{ marginLeft: "20px" }} onClick={() => { navigate("/") }}></img>
          <Btn onClick={() => { navigate("/post") }}>Post</Btn>
        </StHeader>
        <StMainList>
          {todos.map((todo) => {
            return <Card todo={todo} key={todo.id} />
          })}
        </StMainList>
      </>
    );
  }
}

export default Main;


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
    height:100%;
  }

  html {
    height:100%;
  }
`

const StHeader = styled.div`
  width:100%;
  height:8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

`

const StButton = styled.button`
  font-size:20px;
  font-weight: 600;
  padding: 0px 30px 0px 30px;
  background-color: white;
  width:10%;
  border:none;
  cursor: pointer;
`

const StMainList = styled.div`
  width:70%;
  margin:0 auto;
  height:88vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const StWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Btn = styled.label`
    height: 36px;
    padding: 6px 32px;
    background: linear-gradient(180deg, #FFFFFF 0%, #E3E3E3 100%);
    border: 1px solid #D7D7D7;
    border-radius: 4px;
    margin-right: 20px;
    font-weight: 600;
    cursor: pointer;
`;