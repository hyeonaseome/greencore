import React from 'react';
import AppLayout from '@/layout/AppLayout';
import { useAppDispatch, useAppSelector } from '@/core/hooks';
// import { SET_IS_LOADING_FALSE, SET_IS_LOADING_TRUE } from '@/core/common/commonSlice';

export default function index() {
  const dispatch = useAppDispatch();
  // const isLoading = useAppSelector((state) => state.common.isLoading);

  // function handleIsLoadingTrue() {
  //   dispatch(SET_IS_LOADING_TRUE());
  // }
  // function handleIsLoadingFalse() {
  //   dispatch(SET_IS_LOADING_FALSE());
  // }

  return (
    <AppLayout>
      <h1>redux-persist test</h1>
      {/* <div>isLoading: {JSON.stringify(isLoading)}</div>
      <button className='bg-blue-500 rounded mr-2' onClick={handleIsLoadingTrue}>
        로딩 true 변경
      </button>
      <button className='bg-blue-500 rounded' onClick={handleIsLoadingFalse}>
        로딩 false 변경
      </button> */}
    </AppLayout>
  );
}
