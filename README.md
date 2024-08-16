# C–ATTS Recipes

This repository contains the recipes managed by the C–ATTS project. Feel free to use them as a starting point for your own recipes or to contribute to this repository.

## What is C–ATTS?

C–ATTS, or Composite Attestations, is a new type of attestation that combines data from multiple sources to form a unified and verifiable credential.

A recipe is a set of queries that fetch attestations and process them to produce a JSON-formatted attestation that can be minted as an onchain composite attestation by the C–ATTS service. C–ATTS supports any data source that can be queried using GraphQL. 

Recipes are stored in the `recipes` folder of this repository. 

The processing logic is made up of a JavaScript file that is executed by the C–ATTS service, onchain in a secure environment.

To learn more, see the [C–ATTS website](https://catts.run).

## Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/c-atts/catts-recipes.git
cd catts-recipes
```

The only dependency needed is the C–ATTS SDK, packaged as a CLI tool. Install it globally:

```bash
npm install -g catts-sdk
```

## Query variables

C–ATTS supports dynamic variables in the queries and the query endpoints. The following variables are supported:

### Endpoint variables

- `{api-key}`: For querying The Graph endpoints only. C–ATTS manages an API key and will automatically inject it into the query. See for instance the [ENS name holder recipe](https://github.com/c-atts/catts-recipes/blob/main/recipes/ens_name_holder/recipe.json).

### Query variables

- `{user_eth_address}`: The Ethereum address of the current user.
- `{user_eth_address_lowercase}`: The Ethereum address of the current user, lowercased.

## Test run recipes using the CLI tool

### Querying

To fetch query results from a recipe, use the `query` command:

```bash
catts query <recipeFolder>
```

The `query` command will fetch the query results from the specified recipe and print them to the console. You can optionally specify the index of the query to run:

```bash
catts query <recipeFolder> -i <index>
```

To get more detailed output, including verbose logging, use the -v or --verbose option:

```bash
catts query <recipeFolder> -v
```

### Running

To run a recipe, use the `run` command:

```bash
catts run <recipeFolder>
```

The `run` command will fetch the query results from the specified recipe, run the processor script, validate the schema items against the recipe's schema, and print the results to the console.

To get more detailed output, including verbose logging, use the `-v` or `--verbose` option:

```bash
catts run <recipeFolder> -v
```

### Customizing the user address

The CLI needs to know a user address to fetch query results. By default, the SDK uses the `USER_ETH_ADDRESS` environment variable to fetch query results. If you want to use a different address, you can pass the `-e` or `--eth-address` option to the `query` or `run` commands. Alternatively, you can create a `.env` file in the root of your project with the `USER_ETH_ADDRESS` variable set to the desired address.

```bash
catts query <recipeFolder> -e <address>
catts run <recipeFolder> -e <address>
```

## Author

- [kristofer@kristoferlund.se](mailto:kristofer@kristoferlund.se)
- Twitter: [@kristoferlund](https://twitter.com/kristoferlund)
- Discord: kristoferkristofer
- Telegram: [@kristoferkristofer](https://t.me/kristoferkristofer)

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.
