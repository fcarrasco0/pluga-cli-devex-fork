const program = require('commander');
const cfonts = require('cfonts');

const json = require('./json');
const init = require('./init');
const test = require('./test');
const create = require('./create');

const { version, description } = json(`${__dirname}/../package.json`);

program
  .version(version, '-v, --version')
  .description(description);

program
  .command('init <app-path>')
  .description('Initializes a new Pluga app')
  .option('-n, --app-name [app-name]', 'App Name')
  .option('-G, --slip-git', 'Skip `git init`')
  .option('-D, --skip-deps', 'Skip `npm install`')
  .action(init);

program
  .command('test [files-or-directories]')
  .description('Tests your app via mocha')
  .action(test);

program
  .command('create <entity-to-create> <entity-folder-name>')
  .description('Create an action or trigger and their files and tests')
  .option('-p, --path <path-to-directory>', 'Directory where to create entity')
  .option('-n, --entity-name [entity-name]', 'Entity Name')
  .option('-t, --test-only', 'Create only the test')
  .action(create);

program.on('--help', () => {
  cfonts.say('Pluga CLI', { font: 'simple', colors: ['#27AAE1'] });
});

program.on('command:*', () => {
  const args = program.args.join(' ');
  console.error(`Invalid command: ${args}\nSee --help for available commands`);
  process.exit(1);
});

module.exports = program;
