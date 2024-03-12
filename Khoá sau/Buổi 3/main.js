import { getData } from "./src/contains/index.js";
async function mockData() {
  const mockData = await getData("./src/data/mockData.json");
  mockData.json().then((res) => {
    const dataMap = res.map((value, index, array) => {
      // console.log(value, index, array);
      return {
        id: index + 1,
        name: value.full_name,
        age: value.age,
      };
    });
    const filterAGE = dataMap.filter((item) => item.age === 15);
    console.log(filterAGE);
    const findIndexAGE = dataMap.findIndex((item) => item.age === 15);
    console.log(findIndexAGE);
    const findAGE = dataMap.find((item) => item.age === 15);
    console.log(findAGE);
    const reduce = dataMap.reduce(())
  });
}
mockData();
