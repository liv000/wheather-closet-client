import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Menu = styled.div`
  display: flex;
`;

export const MenuItem = styled.span`
  display: inline-block;

  > a {
    display: inline-block;
    margin-left: 20px;
    padding: 0.75rem 1rem;
    background-color: #fff0a4;
    border-radius: 0.5rem;
  }
`;

export const MenuItemAuth = styled.div`
  display: inline-block;

  > span > a {
    display: inline-block;
    margin-left: 1.25rem;
    padding: 0.75rem 1rem;
    background-color: #eaeaea;
`;

export const UserMenu = styled.div`
  position: relative;
  margin-left: 1.875rem;
  z-index: 90;
  cursor: pointer;

  div:first-child {
    width: 32px;
    height: 32px;
  }
`;

export const MenuIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserMenuWrapper = styled.div`
  position: absolute;
  width: 6.25rem;
  height: 6.875rem;
  right: 0;
  top: 50px;
  padding: 1.125rem 0.5rem;
  background-color: #fff;
  border: 1px solid black;
`;

export const UserMenuItem = styled.li`
  margin-top: 0.75rem;

  :first-child {
    margin-top: 0;
  }
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;
