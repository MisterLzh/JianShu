import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Logo, Nav, NavItem, NavSearch, SearchInfo, Addition, Button, Searchwrapper, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style.js'
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreators'
class Header extends Component {
  getListArea () {
    const { focused, list, page } = this.props;
    const newlist = list.toJS();
    const pagelist = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pagelist.push(
        <SearchInfoItem key={newlist[i]}>{newlist[i]}</SearchInfoItem>
      )
    }
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
        <SearchInfoSwitch>换一换</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pagelist}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
  render () {
    const { focused, handleinputfocus, handleinputblur } = this.props;
    return (
      < Text >
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <Searchwrapper>
            <CSSTransition
              in={focused}
              timeout={400}
              classNames="slide"
            >
              <NavSearch className={focused ? 'focused' : ''}
                onFocus={handleinputfocus}
                onBlur={handleinputblur}
              >
              </NavSearch>
            </CSSTransition>
            {this.getListArea(this.props.focused)}
          </Searchwrapper>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='writting'>写文章</Button>
        </Addition>
      </Text >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page'])
    // state.get('header').get('focused')
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleinputfocus () {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleinputblur () {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)