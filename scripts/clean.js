const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

if (!shell.test('-e', 'config/templates')) {
  shell.echo('The example is deleted already.');
  shell.exit(1);
}

process.stdout.write('Cleanup started...');

// Cleanup components/
shell.rm('-rf', 'src/components/*');
shell.cp('config/templates/index.js', 'src/components')

// Cleanup containers/
shell.rm('-rf', 'src/containers');
shell.cp('config/templates/containers/*', 'src/containers');

// Cleanup reducers
shell.rm('-rf', 'src/redux');
shell.cp('config/templates/redux/*', 'src/redux');

// Remove the templates folder
shell.rm('-rf', 'config/templates');

/**
// Commit the changes
if (shell.exec('git add . --all && git commit -qm "Remove default example"').code !== 0) {
  shell.echo('\nError: Git commit failed');
  shell.exit(1);
}
*/
shell.echo('\nCleanup done. Happy Coding!!!');
