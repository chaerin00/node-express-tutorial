const { readFile, writeFile } = require("fs").promises;

// we can use promisify in this way
// const { readFile, writeFile } = require("fs");
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = path => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

readFile("./content/first.txt", "utf-8")
  .then(result => console.log(result))
  .catch(err => console.log(err));

const start = async () => {
  try {
    const data1 = await readFile("./content/first.txt", "utf-8");
    const data2 = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result.txt",
      `This is awesome: ${data1 + " " + data2}`
    );
  } catch (err) {
    console.log(err);
  }
};

start();
