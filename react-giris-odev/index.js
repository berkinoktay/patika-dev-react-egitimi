import getData from './data.js';
(async () => {
  const data = await getData(1);
  console.log(data);
})();
