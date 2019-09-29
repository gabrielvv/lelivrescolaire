import { EmailAddress, DateTime } from "@okgrow/graphql-scalars";
import { eleves as eleveList, columns } from "fixtures/db.json";

export const defaults = {
  eleveList: [],
  eleveListDisplaySettings: []
};

export const resolvers = {
  EmailAddress,
  DateTime,
  Query: {
    eleve: (root, { id }) => {
      return eleveList.find(({ id: eleveId }) => eleveId === id);
    },
    eleveList: () => eleveList,
    eleveListDisplaySettings: () => columns
  },
  Eleve: {
    initials: ({ lastname, firstname }) =>
      `${lastname[0]}${firstname[0]}`.toUpperCase()
  }
};
