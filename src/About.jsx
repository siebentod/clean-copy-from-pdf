import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Коррекция кавычек" />
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
        <div className="about__main">
          {/* <ul>
            <li>...</li>
          </ul> */}
          <p>
            Dadaism and surrealism are the two currents which mark the end of
            modern art. They are contemporaries, though only in a relatively
            conscious manner, of the last great assault of the revolutionary
            proletarian movement; and the defeat of this movement, which left
            them imprisoned in the same artistic field whose decrepitude they
            had announced, is the basic reason for their immobilization. Dadaism
            and surrealism are at once historically related and opposed to each
            other. This opposition, which each of them considered to be its most
            important and radical contribution, reveals the internal inadequacy
            of their critique, which each developed one-sidedly. Dadaism wanted
            to suppress art without realizing it; surrealism wanted to realize
            art without suppressing it. The critical position later elaborated
            by the Situationists has shown that the suppression and the
            realization of art are inseparable aspects of a single supersession
            of art.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
