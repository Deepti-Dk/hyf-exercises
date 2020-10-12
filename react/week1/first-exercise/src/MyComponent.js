import React from 'react';

// const MyLanguage = (props) => {
//   return <div>{props.language}</div>;
// };
const MyComponent = (props) => {
  return (
    <div className="displaydata">
      <strong>Full Name:</strong> {props.name}
      <br />
      <strong>Address:</strong> {props.address}
      <br />
      <strong>Age:</strong> {props.age}
      <br />
      <strong>Height:</strong> {props.height}
      <br />
      <strong>Languages:</strong> {props.languages.join(', ')}
      <br />
      {/* {props.languages.map((language) => {
        return <span> {language} </span>;
      })}  */}
    </div>
  );
};
export default MyComponent;
