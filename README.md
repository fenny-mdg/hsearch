# 🔎 hsearch

Tired of endlessly pressing the up and down keys in your terminal to find that
elusive command you used last week? Look no further! Introducing `hsearch`, your
solution to effortlessly search through your command history with finesse.

## Requirements

- OS: Linux, macOS
- [Deno](https://deno.land) 1.35 or higher. See
  [Deno Installation](https://deno.land/manual/getting_started/installation) for
  more information.

## Installation

To install `hsearch`, ensure you have Deno installed, then run this command in
your terminal:

```bash
deno install --allow-read --allow-env --allow-run --importmap=https://hsearch.fenotiana.dev/hsearch/import_map.json --name=hsearch -r https://hsearch.fenotiana.dev
```

## Quick start

Just type the following command and watch the magic happen:

```bash
hsearch <search_query>
```

## Example

```bash
hsearch git
```

Marvel at the list of commands containing "git" from your history. Pick and
rerun with style!

```bash
hsearch "git commit"
```

Surround query by double quotes for more specific results.

## Advanced usage

```bash
Usage:   hsearch <query>
Version: 0.1.0

Description:

  ██╗░░██╗░██████╗███████╗░█████╗░██████╗░░█████╗░██╗░░██╗
  ██║░░██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██║░░██║
  ███████║╚█████╗░█████╗░░███████║██████╔╝██║░░╚═╝███████║
  ██╔══██║░╚═══██╗██╔══╝░░██╔══██║██╔══██╗██║░░██╗██╔══██║
  ██║░░██║██████╔╝███████╗██║░░██║██║░░██║╚█████╔╝██║░░██║
  ╚═╝░░╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝

  A command-line utility to search your terminal history. 🔎

Options:

  -h, --help     - Show this help.
  -V, --version  - Show the version number for this program.
  -c, --copy     - Copy the selected command to clipboard

```

## Contributing

Found a bug or have ideas to enhance the magic? Contribute to the wizardry by
opening an issue or crafting a spell (pull request).

## License

This project is enchanted under the MIT License.
