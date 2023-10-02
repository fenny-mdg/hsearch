import {Select, prompt} from 'cliffy/prompt';
import {exec} from 'deno/exec';
import {writeText} from 'copy-paste';
import {blue, green, red} from 'fmt/colors';

import {historyFiles} from './shared/constants.ts';

export const search = async (query: string) => {
  let historyFile = Deno.env.get('HISTFILE');

  if (!historyFile) {
    const homeDir = Deno.env.get('HOME');
    const historyFilesStatPromise = historyFiles.map(file =>
      Deno.stat(`${homeDir}/${file}`),
    );
    const historyFilesStat = await Promise.allSettled(historyFilesStatPromise);
    const historyFileIndex = historyFilesStat.findIndex(
      res => res.status === 'fulfilled',
    );

    // History file not found
    if (historyFileIndex === -1) {
      console.log(red('History file not found ❌'));
      Deno.exit(1);
    }

    historyFile = `${homeDir}/${historyFiles[historyFileIndex]}`;
  }

  const {success, stderr, stdout} = await new Deno.Command('cat', {
    args: [historyFile],
  }).output();

  if (!success) {
    console.log(red(new TextDecoder().decode(stderr)));
    Deno.exit(1);
  }

  const historyContent = new TextDecoder().decode(stdout);
  const historyLines = historyContent.split('\n');
  const historyLinesFiltered = [
    ...new Set(historyLines.filter(line => line.includes(query))),
  ];

  if (!historyLinesFiltered.length) {
    console.log(red('No history found ❌'));
    Deno.exit(1);
  }

  return historyLinesFiltered;
};

const searchAndShowPrompt = async (query: string) => {
  const histories = await search(query);

  const {history} = await prompt([
    {
      name: 'history',
      message: 'Select a command by pressing enter',
      type: Select,
      options: histories,
    },
  ]);

  return history;
};

export const searchAndCopy = async (query: string) => {
  const history = await searchAndShowPrompt(query);

  if (history) {
    await writeText(history);
    console.log(green('Copied to clipboard ✅'));
  }
};

export const searchAndExecute = async (query: string) => {
  const history = await searchAndShowPrompt(query);

  if (history) {
    const {output, status} = await exec(history);

    console.log(blue(output));

    if (!status.success) {
      console.log(red('Command failed ❌'));
      Deno.exit(1);
    }
  }

  Deno.exit(0);
};
