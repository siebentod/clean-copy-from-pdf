import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <header>
        <div className="links">
          <div className="link link__github">
            <a href="https://github.com/siebentod/nivritti">
              Github{' '}
              <i
                className="fa-solid fa-arrow-up-right-from-square"
                style={{ fontSize: '9px' }}
              ></i>
            </a>
          </div>
          <div className="link link__about">
            <Link to="/">Home</Link>
          </div>
        </div>
      </header>
      <div className="about">
        <p style={{ textAlign: 'center' }}>
          <h2>404</h2>
          Go to{' '}
          <Link to="/" style={{ textDecoration: 'underline' }}>
            Homepage
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
