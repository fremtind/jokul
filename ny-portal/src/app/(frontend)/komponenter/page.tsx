import { getPayload } from 'payload'
import configPromise from '@/payload.config'

export default async function Components() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'component-page',
  })

  return (
    <ul>
      {data.docs.map((page) => (
        <li key={page.title}>{page.title}</li>
      ))}
    </ul>
  )
}
