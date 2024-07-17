const recipe = {
  name: "eu-gtc-passport-clone",
  queries: [
    {
      endpoint: "https://optimism.easscan.org/graphql",
      query: `
        query PassportQuery($where: AttestationWhereInput, $take: Int)
        {
          attestations(where: $where, take: $take)
          {
            decodedDataJson
          }
        }
      `,
      variables: {
        where: {
          schemaId: {
            equals:
              "0x6ab5d34260fca0cfcf0e76e96d439cace6aa7c3c019d7c4580ed52c6845e9c89",
          },
          recipient: {
            equals: "{user_eth_address}",
            mode: "insensitive",
          },
        },
        take: 1,
      },
    },
  ],
  schema: "uint256 score,uint32 scorer_id,uint8 score_decimals",
  resolver: "0x0000000000000000000000000000000000000000",
  revokable: false,
};

module.exports = recipe;
