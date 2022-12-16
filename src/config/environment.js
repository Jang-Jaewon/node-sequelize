export default {
    port: parseInt(process.env.PORT) || 8080,
    nodeEnv: process.env.NODE_ENV || 'production',
    saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
    jwtAccessTokenSecret:
        process.env.JWT_ACCESS_TOKEN_SECRET ||
        'c1cfb2fd1f3dfba77011433445cfdf28eec5718ae4bab9a6f14b2430146051e4',
    jwtRefreshTokenSecret:
        process.env.JWT_REFRESH_TOKEN_SECRET ||
        '3fe3c8dce2daf0244469e5ecdafd55469a6b3eb17d4bcdd114a483c3152154fc',
};