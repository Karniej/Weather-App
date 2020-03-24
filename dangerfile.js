import { danger, fail, warn, schedule } from 'danger';
import path from 'path';
import jest from 'danger-plugin-jest';
import yarn from 'danger-plugin-yarn';
import { CLIEngine } from 'eslint';
import { istanbulCoverage } from 'danger-plugin-istanbul-coverage';

const exec = require('child_process').exec;

const ESLINT_BASE_DIR = 'app/';

schedule(yarn());
runEslint();
jest({ testResultsJsonPath: path.resolve(__dirname, 'test-results.json') });
schedule(
  istanbulCoverage({
    coveragePath: {
      path: path.resolve(__dirname, './coverage/lcov.info'),
      type: 'lcov',
    },
    numberOfEntries: 15,
    reportFileSet: 'createdOrModified',
    threshold: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  }),
);
schedule(yarnAudit());

async function runEslint(config) {
  const filesToLint = danger.git.created_files
    .concat(danger.git.modified_files)
    .filter(file => file.startsWith(ESLINT_BASE_DIR) && file.endsWith('.js'));
  const cli = new CLIEngine({ baseConfig: config });
  return Promise.all(filesToLint.map(f => lintFile(cli, config, f)));
}

async function lintFile(linter, config, filePath) {
  const contents = await danger.github.utils.fileContents(filePath);
  const report = linter.executeOnText(contents, filePath);

  report.results[0].messages.map(msg => {
    if (msg.fatal) {
      fail(`Fatal error linting ${filePath} with eslint.`);
      return;
    }

    const fn = { 1: warn, 2: fail }[msg.severity];
    fn(`${filePath} line ${msg.line} – ${msg.message} (${msg.ruleId})`);
  });
}

async function yarnAudit() {
  const auditCommand = 'yarn audit --level critical --json';

  exec(auditCommand, (error, stdout) => {
    if (error === null) {
      return;
    }

    const summary = stdout
      .toString()
      .split(/\r?\n/)
      .filter(line => line)
      .map(line => line && JSON.parse(line))
      .find(line => line.type === 'auditSummary');

    const vulnerabilities = summary.data.vulnerabilities;
    warn(
      `Yarn audit found vulnerabilities: ${
        vulnerabilities.critical
      } critical, ${vulnerabilities.high} high, ` +
        `${vulnerabilities.moderate} moderate, ${vulnerabilities.low} low in ${
          summary.data.totalDependencies
        } dependencies`,
    );
  });
}
