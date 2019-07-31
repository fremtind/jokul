module.exports = {
    server: {
        command: 'yarn visual:serve',
        port: 9000,
        launchTimeout: 30000,
    },
    launch: {
        headless: process.env.VISUAL_TEST_HEADLESS,
        defaultViewport:{
            width: 1920,
            height: 1200,
        },
        args: [
            "--no-sandbox"
        ]
    },
    browserContext: "default",
}