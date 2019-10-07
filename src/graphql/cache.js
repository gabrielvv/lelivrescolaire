import { InMemoryCache } from "apollo-boost";
import fixtures from "../fixtures";
import lodashPick from "lodash/pick";

import { GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS } from "./queries";

const cache = new InMemoryCache();

cache.writeQuery({
  query: GET_STUDENT_LIST_WITH_DISPLAY_SETTINGS,
  variables: { classId: "1" },
  data: lodashPick(fixtures, ["studentList", "studentListDisplaySettings"])
});

export default cache;
