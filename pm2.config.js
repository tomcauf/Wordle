module.exports = {
    apps: [{
        name: "wordle.tomcaufrier.be",
        script: "pnpm",
        args: "start --port 4035",
        cwd: "/var/www/wordle.tomcaufrier.be",
        watch: true,
        env: {
            NODE_ENV: "production",
        }
    }]
}