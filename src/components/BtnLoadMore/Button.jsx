import React, { Component } from 'react';
import style from './Button.module.css'

export default class Button extends Component {
  state = {
    page: this.props.pageNum,
  };

  ClickLoadMore = () => {
    this.props.loadMore();
  };

  render() {
    return <button onClick={this.ClickLoadMore} className={style.loadMoreBtn}>Load more...</button>;
  }
}
