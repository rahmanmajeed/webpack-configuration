
import { useState } from 'react';
// import Image from './yts.jpg';
// import one from './01.jpg'
function App() {
    const [state, setstate] = useState(10);
  return (
    <>
      <h1>New React Setup.{state}</h1>
      {/* <img src={Image} alt="img" /> */}
      <img src={require('./yts.jpg')} alt="img" />
    </>
  );
}

export default App;