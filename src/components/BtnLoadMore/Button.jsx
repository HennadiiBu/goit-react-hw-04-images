import style from './Button.module.css';

import React from 'react';

function Button({loadMore}) {

  const ClickLoadMore = () => {
    loadMore();
  };

  return (
    <button onClick={ClickLoadMore} className={style.loadMoreBtn}>
      Load more...
    </button>
  );
}

export default Button;
