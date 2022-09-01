import React, { Suspense } from 'react'
import {NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: black;
  :not(:last-child){
    margin-right: 40px;
  } 
  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
        <div>
          <Header>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </Header> 
          <Suspense fallback={<Loader>Loading...</Loader>}>
            <Outlet />
          </Suspense>
        </div>
  )
}

const Header = styled.header`
    font-size: large;
    display: flex;
    width: 100%;
    padding: 1% 0;
    justify-content: center;
`

const Loader = styled.div`
  font-size: 25px;
  align-items: center;
  display: flex;
  justify-content: center;
`