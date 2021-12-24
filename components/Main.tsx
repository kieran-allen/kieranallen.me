import { Education } from "./Education";
import { Header } from "./Header";
import { Summary } from "./Summary";

export const Main = () => {
  return (
    <div>
      <Header />
      <hr />
      <Summary />
      <hr />
      <section>
        <header>
          <h3>
            Frontend Developer -
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ovoenergy.com/"
            >
              OVO Energy
            </a>
          </h3>
          <h4>April 2018 - Present</h4>
        </header>
        <p>
          As a Frontend Developer at OVO Energy I work as part of a team to
          acquire new customers and retain current customers through our
          Acquisition and Renewal flows. I work primarily with AngularJS and
          ReactJS, both of which leverage the TypeScript library in order to
          create safer code.
        </p>
        <p>Some projects I have worked on include:</p>
        <ul>
          <li>
            Migration of the OVO acquisition frontend from AngularJS to ReactJS.
            <ul>
              <li>73% decrease in time to interactive.</li>
              <li>36% reduction in Javascript package size.</li>
              <li>98% reduction in css package size.</li>
            </ul>
          </li>
          <li>
            Migration of team applications to a new AWS account.
            <ul>
              <li>Terraforming frontend application Infrastructure</li>
              <li>
                Migration to CircleCI as application build pipeline ( away from
                GoCD )
              </li>
            </ul>
          </li>
          <li>
            Implementation of new renewal frontend designs
            <ul>
              <li>10% increase in number of customers renewing their plans.</li>
            </ul>
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <header>
          <h3>
            UI Developer -
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pbs.one"
            >
              Playtech
            </a>
          </h3>
          <h4>September 2016 - April 2018</h4>
        </header>
        <p>
          As a UI Developer at Playtech I work extensively with data heavy
          customer facing React.JS applications. My team follow the scrum
          methodology with week long sprints and daily stand-up meetings to
          inform others on work done. As part of my team I carry out daily code
          reviews to ensure quality of code across all applications is
          maintained.
        </p>
        <p>Some projects I have worked on:</p>
        <ul>
          <li>
            Implemented localised date and number formatting for clients using
            the react-intl library. This feature greatly improved the user
            experience for clients located outside the United Kingdom.
          </li>
          <li>
            Developed a native fetch component to handle all of the applications
            api requests, thus removing any need for JQuery in our build.
          </li>
          <li>
            Successfully reworked our redux store to be used across all
            applications instead of using separate stores for each application.
            This greatly simplified our codebase and cut down on a lot of
            duplicate code.
          </li>
        </ul>
      </section>
      <hr />
      <Education />
    </div>
  );
};
