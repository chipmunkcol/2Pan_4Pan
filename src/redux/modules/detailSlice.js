import { createAsyncThunk, configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    detail: [],
};



export const detailSlice = createSlice({
	name: 'detail', // 이 모듈의 이름을 적어줘야함
	initialState, // 이 모듈의 초기상태 값
	reducers : {}, // 이 모듈의 Reducer 로직
})

export const {} = detailSlice.actions; // 이것은 리듀서에 함수를 넣을 때 사용하면 됨
export default detailSlice.reducer; // 디테일슬라이스에 리듀서를 넣는것