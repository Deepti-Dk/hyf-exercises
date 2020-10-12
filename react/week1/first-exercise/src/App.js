import React from 'react';
import MyComponent from './MyComponent';
import './App.css';
const users = [
  {
    fullname: 'testy mc testy face',
    address: 'test alley',
    age: 35,
    height: 185,
    languages: ['danish', 'arabic'],
  },
  {
    fullname: 'Ahmad Hansen',
    address: 'test alley 2',
    age: 89,
    height: 167,
    languages: ['english', 'polish'],
  },
  {
    fullname: 'Peter Petersen',
    address: 'alley 2',
    age: 19,
    height: 176,
    languages: ['english', 'danish'],
  },
];

function App() {
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <MyComponent
            name={user.fullname}
            address={user.address}
            age={user.age}
            height={user.height}
            languages={user.languages}
          />
        );
      })}
    </div>
  );
}
export default App;
// import React from 'react';
// import MyComponent from './MyComponent'
// const users = [
//   {
//     name: 'Mads',
//     age: 38,
//     language: ['dk', 'en'],
//   },
//   {
//     name: 'johjh',
//     age: 15,
//     language: ['dk']
//   }
// ]
// function App() {
//   return (
//     <div className="App">
//       {users.map(user => {
//          return (
//           <MyComponent
//             name={user.name}
//             age={user.age}
//             languages={user.language}
//           />
//          )
//       })}
//     </div>
//   );
// }
// export default App;
