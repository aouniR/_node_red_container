module.exports = {
    uiPort: process.env.PORT || 1880,
    userDir: './',
    flowFile: 'flow_test_1.json',
    editorTheme: {
        projects: {
            enabled: false,
        },
    },
    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",
                password: "$2b$08$sE1e4tMTbU1j3L9rDGPIKO.NkG00TdgrGL769z6PvN7m8FYqkbz5e",
                permissions: "*",
            },
            {
                username: "user",
                password: "$2b$08$s5IsO2NuCCt74vJjvGx4q.UVwp/Zx5W24dWphp46wYWykKtY8b2C2",
                permissions: "read"
            }
        ],
    },
    httpStatic: '/app/',
    externalModules: [
      '/app/node-modules',	
    ],
    flowFilePretty: false,
    logging: {
    console: {
        level: "warn",
        metrics: false,
        audit: false
    }
}
};
