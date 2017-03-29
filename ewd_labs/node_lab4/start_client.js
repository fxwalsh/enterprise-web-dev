const args = [ 'start' ];

const opts = { stdio: 'inherit', cwd: 'C:\repos\enterprise-web-dev\ewd_labs_2017\node_lab2\hackerNews', shell: true };

require('child_process').exec('npm start');