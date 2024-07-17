const recipe = {
  name: "armitage-contributor",
  queries: [
    {
      endpoint: "https://sepolia.easscan.org/graphql",
      query: `
        query ArmitageContributorQuery($where: AttestationWhereInput)
        {
          attestations(where: $where)
          {
            decodedDataJson
          }
        }
      `,
      variables: {
        where: {
          schemaId: {
            equals:
              "0xdd55069b521b51585a2d09bed03cecde4524d4392683dc3c3c3cf09755a2a5b2",
          },
          attester: {
            equals: "{user_eth_address}",
            mode: "insensitive",
          },
        },
      },
    },
  ],
  schema: "bool armitage_contributor",
  resolver: "0x0000000000000000000000000000000000000000",
  revokable: false,
};

module.exports = recipe;