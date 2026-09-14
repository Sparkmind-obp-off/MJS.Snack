module.exports = {
  apps: [{
    name: 'mjs-snack-demo',
    script: 'npm',
    args: 'run preview',
    cwd: '/home/user/webapp',
    env: { NODE_ENV: 'production', PORT: 3000 },
    watch: false,
    instances: 1,
    exec_mode: 'fork'
  }]
}
