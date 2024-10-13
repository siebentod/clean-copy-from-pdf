import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <a href="https://github.com/siebentod/elochki">Github</a> |{' '}
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;
