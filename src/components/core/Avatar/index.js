import React from 'react';
import styles from './index.less';

class Avatar extends React.PureComponent{

  render() {
    const {src} = this.props;
    return (
      <div className={styles.user}>
        <div className={styles.face}>
          {src ? <img src={src} /> : 'AT'}
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default Avatar;