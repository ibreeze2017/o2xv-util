import React from 'react';
import {Link} from 'react-router-dom';
import styles from './index.less';

class Menu extends React.Component{

  onClick = (menuItem, menu)=> {
    const {onClick} = this.props;
    return () => {
      if(onClick) {
        onClick(menuItem, menu);
      }
    }
  }

  render() {
    const {data=[]} = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.menu}>
          <div className={styles.title}>
            往事如风：<span className={styles.level}>LV10</span>
          </div>
          <div className={styles.body}>
            {
              data.map(item => {
                item.key = item.key || item.name;
                const {key, text, url} = item;
                return (
                  <div className={styles.item} key={key} onClick={this.onClick(item, data)}>
                    {url ? <Link to={url}>{text}</Link> : text}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }

}

export default Menu;