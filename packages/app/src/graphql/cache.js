import { InMemoryCache } from "apollo-boost";

const cache = new InMemoryCache();

cache.writeData({
  data: {
    studentList: [],
    studentListDisplaySettings: []
  }
});

export default cache;
