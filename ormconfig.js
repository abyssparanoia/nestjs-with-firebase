const TypeOrmNamingStrategy = require('./src/config/TypeOrmNamingStrategy.js') // これ！

module.exports = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'users',
  charset: 'utf8mb4',
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['src/db/migrations/**/*.ts'],
  subscribers: ['src/db/subscribers/**/*.ts'],
  cli: {
    entitiesDir: ['src/**/'],
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers',
  },
  namingStrategy: new TypeOrmNamingStrategy(),
}
