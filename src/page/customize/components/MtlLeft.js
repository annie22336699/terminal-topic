import MtlLBtn from './MtlLBtn';
import { ReactComponent as Logo } from '../../../imgs/logo.svg';
import { ReactComponent as Rectangle } from '../../../imgs/rectangle.svg';
import { ReactComponent as ArrR } from '../../../imgs/arrow-right-noccircle.svg';
import { useState } from 'react';
import { mtlData } from './../sushiMtlTest';

function MtlLeft(props) {
  const [openLArea, setOpenLArea] = useState(false);
  // const [chooseMtl, setChooseMtl] = useState(false);
  const [mtlActive, setMtlActive] = useState(-1);

  return (
    <>
      <div
        className="left-area mx-auto px-0"
        style={
          openLArea
            ? { transform: 'translate(calc( -100% + 30px))' }
            : { transform: 'translate(0%)' }
        }
      >
        <div className="la-menu col px-0">
          <div className="logoMtl">
            <Logo className="logoMtl-box" />
            <div className="col-12" />
          </div>
          <div className="mtlBtn-l col p-0">
            <div className="d-flex choose ch-title-16">
              <div
                className="dec col-12"
                // onClick={() => {
                //   setChooseMtl(!chooseMtl);
                // }}
              >
                <Rectangle
                  className="rectangle"
                  // style={chooseMtl ? { display: 'none' } : { display: 'inline' }}
                />
                <div
                // style={
                //   chooseMtl ? { color: '#c4c4c4' } : { color: '#575757' }
                // }
                >
                  食材
                </div>
              </div>
              <div className="ing col-12">
                <Rectangle className="rectangle" />
                <div>裝飾</div>
              </div>
            </div>
            <div className="mtlBtnIn-L d-flex flex-wrap pt-3 px-2">
              {mtlData.map((e, i) => {
                const {
                  mtl_id,
                  mtl_name,
                  mtl_cate,
                  mtl_produce_date,
                  mtl_raw_matrials,
                  mtl_img_path,
                  mtl_value,
                  mtl_print_time,
                  mtl_3d_img_path,
                  mtl_3d_normalmap_img_path,
                  mtl_sugar5,
                  mtl_oil,
                  mtl_protein,
                  mtl_carbo,
                  mtl_na,
                  mtl_calories,
                } = e;
                return (
                  <MtlLBtn
                    key={mtl_id}
                    mtl_id={mtl_id}
                    mtl_name={mtl_name}
                    mtl_img_path={mtl_img_path}
                    setMtlActive={setMtlActive}
                    // onClick={() => setMtlActive(i)}
                    //onClick={() => console.log(i)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="la-btn"
          onClick={() => {
            setOpenLArea(!openLArea);
          }}
        >
          <input type="checkbox" className="la-btn-box" />
          <ArrR className="arrR" />
        </div>
      </div>
    </>
  );
}

export default MtlLeft;
