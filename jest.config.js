module.exports = {
    // 设置测试环境，通常是node或jsdom
    testEnvironment: 'node',

    // 匹配测试文件的模式，可以根据需要进行调整
    testMatch: [
        '<rootDir>/src/**/*.test.ts',
        '<rootDir>/src/**/*.test.tsx',
    ],

    // 设置TypeScript支持
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

    // 如果你的代码中使用了ES模块，需要启用这个选项
    // (TypeScript中的默认模块系统是ES模块)
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
            isolatedModules: true,
        },
    },
};