import mern from "./mern.json";

import js from "./js.json";
import { JAVASCRIPT, MERN } from "../constants/slug.constant";

const getCourseDetails = (slug: string) => {
  if (slug === JAVASCRIPT) {
    return js;
  } else if (slug === MERN) {
    return mern;
  } else {
    return null;
  }
};

export default getCourseDetails;
