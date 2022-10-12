import styled from "styled-components";

export const StyledHeader = styled.header`
position: fixed;
top: 0;
transition: all .6s;
width: 100%;
height: 60px;
z-index: 1000;
padding: 1em 2em;
display: flex;
justify-content: space-between;
&-dark {
    background-color: $light-green;
}
&-light {
    background-color: white;
    box-shadow: 0 5px 7px -2px rgba(0, 0, 0, 0.2);
}
`;

export const Signature = styled.img`
height: 35px;
transition: all .5s;
cursor: pointer;
&-green {
  position: absolute;
  left: 32px;
  opacity: 0;
}
&-black {
  opacity: 1;
}
@media(min-width: 450px) {
  height: 50px;
}
`;

export const Nav = styled.nav``;

export const NavUL = styled.ul`
list-style: none;
text-align: center;
margin: 10px 20px 0 0;
display: flex;
@media(min-width: 450px) {
  margin: 10px 50px 0 0;
}
`;

export const NavLi = styled.li``;

export const Anchor = styled.span`
display: block;
padding: 5px;
text-decoration: none;
color: $dark-green;
font-weight: 800;
text-transform: uppercase;
margin: 0 5px;;
text-decoration: none;
position: relative;
color: inherit;
/* font-size: 0.6em; */
&::after {
position: absolute;
content: "";
height: .1em;
top: 100%;
background: currentColor;
z-index: -1;
left: 0;
right: 0;
transform: scaleX(0);
transition: transform .5s cubic-bezier(.95, .05, .795, .035);
@media(min-width: 450px) {
  margin: 0 10px;
}
}

&:hover::after {
transition-timing-function: cubic-bezier(.19, 1, .22, 1);
transform: scaleX(1);
}
&:hover {
cursor: pointer;
}
`;

