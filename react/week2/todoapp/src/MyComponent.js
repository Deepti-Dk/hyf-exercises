import React from 'react';

class MyComponent extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }
  componentDidUpdate(prevProps) {
    console.log('updated', this.props, prevProps);
    if (this.props.test !== prevProps.test) {
      //some code
    }
  }
  componentWillUnmount() {
    console.log('unmounted');
  }
  render() {
    return <div>My Class Component</div>;
  }
}

export default MyComponent;
