import clsx from "clsx";
import { Education } from "./Experience/Education";
import { Header } from "./Header";
import { Playtech } from "./Experience/Playtech";
import { Summary } from "./Summary";
import { OvoEnergy } from "./Experience/OvoEnergy";
import { Truelayer } from "./Experience/Truelayer";

export const Main = () => {
  return (
    <div className={clsx('max-w-3xl', 'mx-auto', 'flex', 'flex-col', 'gap-4', 'my-8')}>
      <Header />
      <hr />
      <Summary />
      <hr />
      <Truelayer />
      <hr />
      <OvoEnergy />
      <hr />
      <Playtech />
      <hr />
      <Education />
    </div>
  );
};
