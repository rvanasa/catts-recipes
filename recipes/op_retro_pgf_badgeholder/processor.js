if (!queryResult[0].data.attestations[0]) {
  throw new Error("RetroPGF badge not found for this address.");
}

const decodedDataJson = JSON.parse(
  queryResult[0].data.attestations[0].decodedDataJson
);

let data = [];
for (const item of decodedDataJson) {
  data.push({
    name: item.name,
    type: item.type,
    value: item.value.value,
  });
}

return JSON.stringify(data);
