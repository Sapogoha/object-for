export default function orderByProps(obj, keys) {
  const givenProperties = [];
  const sortedProperties = [];

  keys.forEach((key) => {
    givenProperties.push({
      key,
      value: obj[key],
    });
  });

  for (const key in obj) {
    if (!keys.includes(key)) {
      sortedProperties.push({
        key,
        value: obj[key],
      });
    }
  }

  sortedProperties.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...givenProperties, ...sortedProperties];
}
