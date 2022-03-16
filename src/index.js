import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
// import TestCol from './TestCol';
// import Mtl from './page/mtl/Mtl';
import Customize from './page/customize/Customize';
// import CusMiDetail from './page/customize/CusMiDetail';

ReactDOM.render(
  <React.StrictMode>
    {/* <TestCol /> */}
    {/* <Mtl /> */}
    <Customize />
    {/* <CusMiDetail /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
