import config from '../../../Config';

function MtlLBtn(props) {
  const { mtl_id, mtl_name, mtl_img_path, mtlActive, setMtlActive, addclass } =
    props;

  return (
    <div
      className="mtlLBtn col-8 my-3"
      onClick={() => {
        setMtlActive([mtl_id, ...mtlActive]);
      }}
    >
      <div className="mtlimg">
        <img
          src={`${config.HOST}${mtl_img_path}`}
          alt={mtl_name}
          className={addclass ? 'imgActive' : 'imgActiveNone'}
        />
      </div>
      <div className="mtlname">{mtl_name}</div>
    </div>
  );
}

export default MtlLBtn;
