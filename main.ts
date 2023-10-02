import {Command} from 'cliffy/command';
import {searchAndCopy, searchAndExecute} from './src/search.ts';

const main = async () => {
  await new Command()
    .name('hsearch')
    .version('0.1.0')
    .description(
      `
██╗░░██╗░██████╗███████╗░█████╗░██████╗░░█████╗░██╗░░██╗
██║░░██║██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██║░░██║
███████║╚█████╗░█████╗░░███████║██████╔╝██║░░╚═╝███████║
██╔══██║░╚═══██╗██╔══╝░░██╔══██║██╔══██╗██║░░██╗██╔══██║
██║░░██║██████╔╝███████╗██║░░██║██║░░██║╚█████╔╝██║░░██║
╚═╝░░╚═╝╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝

A command-line utility to search your terminal history. 🔎
`,
    )
    .option('-c, --copy', 'Copy the selected command to clipboard')
    .arguments('<query:string>')
    .action(async (options, ...args) => {
      const {copy} = options;
      const [query] = args;

      if (copy) {
        await searchAndCopy(query);
      } else {
        await searchAndExecute(query);
      }
    })
    .parse(Deno.args);
};

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  await main();
}
