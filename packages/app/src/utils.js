import lodashGet from "lodash/get";
import lodashIsEmpty from "lodash/isEmpty";

export const reduceValueFromCollection = (collectionPath, valuePath) => obj => {
  const collection = lodashGet(obj, collectionPath);
  if (collection) {
    const total = collection.reduce((sum, item) => {
      return sum + lodashGet(item, valuePath);
    }, 0);
    return lodashIsEmpty(collection) ? 0 : parseInt(total / collection.length);
  }
  return 0;
};

export const reduceValueFromSubCollection = (
  collectionPath,
  subCollectionPath,
  valuePath
) => obj => {
  const collection = lodashGet(obj, collectionPath);
  const reducer = reduceValueFromCollection(subCollectionPath, valuePath);
  if (collection) {
    const total = collection.reduce((sum, item) => sum + reducer(item), 0);
    return lodashIsEmpty(collection) ? 0 : parseInt(total / collection.length);
  }
  return 0;
};
