import { Header, Title, AsideLeft, AsideRight, Footer } from '../layout/Layout';
import './customize.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Plus } from '../../imgs/plus.svg';
import { ReactComponent as Minus } from '../../imgs/minus.svg';

function CusMiDetail() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <AsideLeft />
        <div style={{ width: '100%' }}>
          <Title title={'Customization'} />
          <div className="customize mycontainer min-hi">
            <div className="trail">HOME / CUSTOMIZATION</div>
            <div className="cus-detail">
              <div className="cus-img">
                <img src="" alt="" />
              </div>
              <div className="detail">
                <input
                  type="text"
                  className="search-input-bar ch-title-20"
                  placeholder="請幫您的成品取名"
                />
                <div className="cus-value">
                  <div className="value-l">NT_$500</div>
                  <div className="value-r">TOTAL PRICE</div>
                </div>
                <div className="cus-printtime">
                  <div className="printtime-l">40_SEC</div>
                  <div className="printtime-r">PRINT TIME</div>
                </div>
              </div>
            </div>
            <div className="cus-mtl-detial ch-cont-16">
              <div className="chart-img"></div>
              <div className="mtl-detail">
                <div className="mtl-name">
                  <div className="name-l">鮭魚</div>
                  <div className="name-r">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="origin">
                  <div className="origin-l">挪威</div>
                  <div className="origin-r">ORIGIN</div>
                </div>
                <div className="mfd">
                  <div className="mfd-l">2022-11-15</div>
                  <div className="mfd-r">MFD</div>
                </div>
                <div className="rm">
                  <div className="rm-l">大豆</div>
                  <div className="rm-r">RM</div>
                </div>
              </div>
            </div>
            <div className="manual ch-cont-14">
              <div className="delivery col">
                <div className="deli">配送類型</div>
                <div className="deli">宅急便(冷藏)</div>
                <div className="deli">
                  ※若需要冷凍宅配，請幫忙註明。若冷藏與冷凍商品需一起下單，將會延長運送時間，請先預約。另外，若商品需要變更，請提前與我們聯繫。
                </div>
              </div>
              <div className="mfd-time col">
                <div className="mfdt">≪賞味期限≫</div>
                <div className="mfdt">冷蔵：出貨後4天</div>
                <div className="mfdt">冷凍：出貨後一個月</div>
              </div>
              <div className="package col">
                <div className="pkg">≪保存方法≫</div>
                <div className="pkg">冷藏：請保存於4℃</div>
                <div className="pkg">冷凍：請保存於-15℃</div>
              </div>
            </div>
            <div className="btn-area">
              <div className="btn-top">
                <button className="btn-sm btn-outline-primary primeal-btn-outline m-2">
                  返回製作
                </button>
                <button className="btn-sm btn-outline-primary primeal-btn-outline m-2">
                  儲存編輯
                </button>
              </div>
              <div className="btn-buttom">
                <div className="select-add-cart ch-cont-28">
                  <div className="select-count">
                    <button>
                      <Minus />
                    </button>
                    <input type="number" />
                    <button>
                      <Plus />
                    </button>
                  </div>
                </div>
                <button className="btn-sm btn-primary primeal-btn m-2">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <AsideRight />
      </div>
    </>
  );
}

export default CusMiDetail;
