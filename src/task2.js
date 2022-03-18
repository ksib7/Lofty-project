// Задание 2
// Переписать Promise на Async/Await

// Изначальный вариант

/* const getJson = (url) => fetch(url).then((res) => res.json());

getJson("/i/1.json")
  .then((json) => {
    if (json.key) {
      return getJson("/i/2.json");
    }
    throw new Error("No key");
  })
  .then((json) => {
    return json.key2;
  })
  .catch((error) => {
    console.error(error);
  }); */

// Переписанный вариант №1

const getJson = async (url) => fetch(url).then((res) => res.json());

try {
  const json = await getJson("/i/1.json");
  if (json.key) {
    getJson("/i/2.json");
  }
} catch (e) {
  console.error(e.error);
}

// Переписанный вариант №2

async function getFetch(url) {
  const getJson = await fetch(url);
  if (getJson.key) {
    getFetch("/i/2.json");
    return getJson.key2;
  } else {
    throw new Error("No key");
  }
}

getFetch("/i/1.json").catch((error) => {
  console.error(error);
});
