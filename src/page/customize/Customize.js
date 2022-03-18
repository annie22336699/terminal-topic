import { Title } from './../layout/Layout';
import './customize.scss';
import MtlLeft from './components/MtlLeft';
import MtlMid from './components/MtlMid';
import MtlRight from './components/MtlRight';
import { useState } from 'react';

function Customize() {
  const [mtlData, setMtlData] = useState('');

  return (
    <>
      <div className="mtlHeader">
        <Title />
      </div>
      <div className="container-fluid customize">
        <div className="row mtlView">
          <MtlLeft setMtlData={setMtlData} />
          <MtlMid />
          <MtlRight />
        </div>
      </div>
    </>
  );
}

export default Customize;
