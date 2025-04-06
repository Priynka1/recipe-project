export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="footer-logo">
            <img
              className="footer-img"
              src="https://img.freepik.com/premium-vector/food-logo-design-vector-white-background_1277164-14863.jpg?w=360"
            ></img>
          </div>
          <div className="footer-link">
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>About</p>
            <p>Contact us</p>
          </div>
          <div className="policies">
            <h3>Legal</h3>
            <p>Trem & Condition</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
          <div className="icons">
            <h3>Social Links : </h3>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="copyright-div">
          <p className="copyright">&copy;Copyright2025.All right reserved</p>
        </div>
      </div>
    </>
  );
};
