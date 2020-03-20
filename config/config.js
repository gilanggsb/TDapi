module.exports = {
    //ubah DB yg sudah di bold dengan host mongodb masing-masing
    DB: process.env.HOST ? process.env.HOST : 'mongodb+srv://admin:inipassword@gg-6csk1.mongodb.net/learnit-react',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
};