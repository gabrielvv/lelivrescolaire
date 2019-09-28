import { candidats as candidatList, columns } from "fixtures/db.json";
import lodashIsEmpty from 'lodash/isEmpty';

export const defaults = {
  candidatList: [],
  candidatListDisplaySettings: [],
};

export const resolvers = {
  Query: {
    candidat: (id) => candidatList.find(({id: candidatId}) => candidatId === id),
    candidatList: () => candidatList,
    candidatListDisplaySettings: () => columns,
  },
  Candidat: {
    initials: ({ lastname, firstname }) => `${lastname[0]}${firstname[0]}`.toUpperCase(),
    tags: ({ currentSession }) => [currentSession].reduce((tags, { constraints }) => {
      return [...tags, ...constraints.map(constraint => constraint.constraintType)];
    }, []),
  },
  Session: {
    timeSpent: ({ exercises }) => exercises.reduce((totalTimeSpent, { timeSpent }) => {
      return totalTimeSpent + timeSpent;
    }, 0),
    successRate: ({ exercises }) => {
      const successRateSum = exercises.reduce((sum, { successRate }) => {
        return sum + successRate;
      }, 0);
      return lodashIsEmpty(exercises) ? 0 : parseInt(successRateSum / exercises.length);
    },
  }
};
