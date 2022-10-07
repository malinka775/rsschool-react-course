import React from 'react';

import './Button.scss';

interface IButtonProps {
  callback: () => void;
  name: string;
  clName?: string;
}

class Button extends React.Component<IButtonProps> {
  render() {
    const { callback, name, clName } = this.props;
    const classNames = clName ? `button ${clName}` : 'button';
    return (
      <button onClick={callback} className={classNames}>
        {name}
      </button>
    );
  }
}

export default Button;
