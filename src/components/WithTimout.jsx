/* eslint-disable react/display-name */
import  { useEffect, useState } from 'react';

const withTimeout = (WrappedComponent, duration) => {
  return (props) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }, []);

    return visible ? <WrappedComponent {...props} /> : null;
  };
};

export default withTimeout;
