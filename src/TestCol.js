function TestCol() {
  return (
    <div classNameName="container">
      <div className="row">
        <div className="col-3 box">我打個字看看</div>
        <div className="col-18 box">
          <div className="row navtitle">
            <div className="col-12">
              <mytitle>Title</mytitle>
              <p>我就確認一下他是不是一半</p>
            </div>
            <div className="col-12">
              <mytitle>這裡用中標</mytitle>
              <p>Salmon Another use English</p>
            </div>
          </div>
        </div>

        <div className="col-3 box">123</div>
      </div>
    </div>
  );
}

export default TestCol;
