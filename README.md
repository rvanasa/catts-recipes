# C–ATTS Recipes

This repository contains some example recipes for the C–ATTS service. Use them as a starting point for your own recipes.

> [!NOTE]  
> This repository is a work in progress. Features and functionality may change without notice. C–ATTS has not yet been publicly released.

## What is C–ATTS?

C–ATTS, or Composite Attestations, is a new type of attestation that combines data from multiple sources to form a unified and verifiable credential.

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

## CLI Usage

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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.

