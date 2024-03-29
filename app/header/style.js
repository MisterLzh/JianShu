import styled from 'styled-components';
import logopic from '../../images/logo.png'
export const Text = styled.div`
position:relative;
height:58px;
border-bottom:1px solid #ccc;
`
export const Logo = styled.a.attrs({ href: '/' })`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logopic});
background-size:contain;
`
export const Nav = styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
`
export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
`
export const Searchwrapper = styled.div`
position:relative;
float:left;
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
margin-top:9px;
margin-left:20px;
padding:0 35px 0 20px;
box-sizing:border-box;
background:#eee;
font-size:14px;
color:#777;
&::placeholder{
    color:#999;
}
&.focused{
  width:240px;
}
&.slide-enter{
width:160px;
transition:all .4s ease-out;
}
&.slide-enter-active{
width:240px;
}
&.slide-exit{
transition:all .2s ease-out;
}
&.slide-exit-active{
  width:160px;
}
`
export const SearchInfo = styled.div`
position: absolute;
left:0;
top:58px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`
export const SearchInfoSwitch = styled.span`
float:right;
font-size:13px;
`
export const SearchInfoList = styled.div`
overflow:hidden;
`
export const SearchInfoItem = styled.a`
display:block;
float:left;
margin-right:10px;
margin-bottom:15px;
font-size:12px;
padding:0 5px;
line-height:20px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
`
export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button = styled.div`
float:left;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
    color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6149;
}
`