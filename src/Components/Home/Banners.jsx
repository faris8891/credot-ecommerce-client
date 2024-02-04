function Banners() {
  return (
    <div className="row row-cols-1 row-cols-lg-12 py-4">
      <div className="col-lg-7">
        <img
          className="img-fluid h-100"
          src="https://res.cloudinary.com/dknozjmje/image/upload/v1707037756/Credot/static/ct9qccyqvhmxgnr0sdfs.png"
          alt=""
        />
      </div>
      <div className="col-lg-5 ">
        <img
          className="img-fluid d-none d-lg-block lg-h-100"
          src="https://res.cloudinary.com/dknozjmje/image/upload/v1707038601/Credot/static/r83plwcmzxaiqwp2v7wh.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banners;
