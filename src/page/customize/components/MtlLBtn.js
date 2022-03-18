function MtlLBtn(props) {
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
    // chooseMtl,
    // setChooseMtl,
    setMtlActive,
  } = props;
  return (
    <div
      className="mtlLBtn col-8 my-3"
      onClick={() => {
        setMtlActive(mtl_id);
      }}
    >
      <div className="mtlimg">
        <img src={mtl_img_path} alt={mtl_name} />
      </div>
      <div className="mtlname">{mtl_name}</div>
    </div>
  );
}

export default MtlLBtn;
