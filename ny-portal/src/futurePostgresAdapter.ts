import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { AssumeRoleWithWebIdentityCommand, STSClient } from '@aws-sdk/client-sts'
import { Signer } from '@aws-sdk/rds-signer'
import { postgresAdapter } from '@payloadcms/db-postgres'

const getCaCertificate = () => readFileSync(join(__dirname, 'cacert.pem'), 'utf-8')

const getIdentityToken = () =>
  readFileSync(join(process.env.AWS_WEB_IDENTITY_TOKEN_FILE || ''), 'utf-8')

const ca = getCaCertificate()
const identityToken = getIdentityToken()

const stsClient = new STSClient({
  region: process.env.AWS_REGION || 'eu-north-1',
})

const getPostgresAdapter = () => {
  return postgresAdapter({
    schemaName: 'payload',
    pool: {
      ssl: { ca },
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_OWNER_USER,
      database: process.env.DB_NAME,
      password: async () => {
        const stsData = await stsClient.send(
          new AssumeRoleWithWebIdentityCommand({
            RoleArn: process.env.AWS_ROLE_ARN,
            RoleSessionName: 'jokul-portal-sts',
            WebIdentityToken: identityToken,
          }),
        )

        const signer = new Signer({
          hostname: process.env.DB_HOST || '',
          port: Number(process.env.DB_PORT) || 5432,
          username: process.env.DB_OWNER_USER || '',
          region: process.env.AWS_REGION || 'eu-north-1',
          credentials: {
            accessKeyId: stsData.Credentials?.AccessKeyId || '',
            secretAccessKey: stsData.Credentials?.SecretAccessKey || '',
            sessionToken: stsData.Credentials?.SessionToken,
          },
        })

        return signer.getAuthToken()
      },
    },
  })
}

export default getPostgresAdapter
