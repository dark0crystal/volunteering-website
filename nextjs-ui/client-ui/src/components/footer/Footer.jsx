export default function Footer() {
    return (
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            {/* Footer Left Section */}
            <div className="col-md-4 mb-3">
              <h5 className="mb-2">About Us</h5>
              <p className="small">
                Together, we are building a platform to connect volunteers with opportunities, empowering positive changes in communities.
              </p>
            </div>
  
            {/* Footer Center Section */}
            <div className="col-md-4 mb-3">
              <h5 className="mb-2">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#" className="text-light text-decoration-none">Opportunities</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Footer Right Section */}
            <div className="col-md-4 mb-3">
              <h5 className="mb-2">Connect With Us</h5>
              <ul className="list-unstyled d-flex gap-3">
                <li><a href="#" className="text-light text-decoration-none"><i className="bi bi-facebook"></i></a></li>
                <li><a href="#" className="text-light text-decoration-none"><i className="bi bi-twitter"></i></a></li>
                <li><a href="#" className="text-light text-decoration-none"><i className="bi bi-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <hr className="border-light" />
          <div className="text-center">
            <p className="mb-0 small">&copy; 2024 Together We Make a Difference. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  