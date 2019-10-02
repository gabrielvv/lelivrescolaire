import { InMemoryCache } from "apollo-boost";
import { loader } from "graphql.macro";
import fixtures from "../fixtures";
import lodashPick from 'lodash/pick';

const getStudentListQuery = loader(
  "graphql/getStudentListWithDisplaySettings.gql"
);

const cache = new InMemoryCache();

cache.writeQuery({
  query: getStudentListQuery,
  variables: { classId: "1" },
  data: lodashPick(fixtures, ['studentList', 'studentListDisplaySettings']),
});

export default cache;
