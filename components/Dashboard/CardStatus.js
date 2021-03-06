const CardStatus = (props) => {
  return (
    <div className="row mt-3 ml-1 mr-1 mb-2">
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-danger img-card box-primary-shadow border">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <p className="text-white mb-0">TOTAL POSITIF</p>
                <h2 className="mb-0 number-font">20.000</h2>
                <p className="text-white mb-0">Orang</p>
              </div>
              <div className="ml-auto">
                <img
                  src="image/positif.png"
                  width="50"
                  height="50"
                  alt="positif"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-success img-card box-primary-shadow border">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <p className="text-white mb-0">TOTAL SENBUH</p>
                <h2 className="mb-0 number-font">12.000</h2>
                <p className="text-white mb-0">Orang</p>
              </div>
              <div className="ml-auto">
                <img
                  src="image/positif.png"
                  width="50"
                  height="50"
                  alt="positif"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-secondary img-card box-primary-shadow border">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <p className="text-white mb-0">TOTAL MENINGGAL</p>
                <h2 className="mb-0 number-font">300</h2>
                <p className="text-white mb-0">Orang</p>
              </div>
              <div className="ml-auto">
                <img
                  src="image/positif.png"
                  width="50"
                  height="50"
                  alt="positif"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-info img-card box-primary-shadow border">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <p className="text-white mb-0">TOTAL ACTIVE</p>
                <h2 className="mb-0 number-font">7.700</h2>
                <p className="text-white mb-0">Orang</p>
              </div>
              <div className="ml-auto">
                <img
                  src="image/positif.png"
                  width="50"
                  height="50"
                  alt="positif"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStatus;
