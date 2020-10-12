import React, { useEffect } from 'react';

const MyFuncComponent = (props) => {
  const { test } = props;

  useEffect(() => {
    console.log('func mounted');

    return () => {
      console.log('func unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('func updated', test);
  }, [test]);

  return <div>My func component</div>;
};

export default MyFuncComponent;
