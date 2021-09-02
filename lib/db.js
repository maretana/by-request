const mysqlx = require('@mysql/xdevapi')

const client = mysqlx.getClient(
  {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    schema: process.env.DB_SCHEMA
  },
  { pooling: { enabled: true, maxIdleTime: 30000, maxSize: 25, queueTimeout: 10000 } }
)

exports.getSession = async () => client.getSession()
