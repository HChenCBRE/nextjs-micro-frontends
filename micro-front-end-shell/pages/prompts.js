import dynamic from 'next/dynamic'

const RemotePrompts = dynamic(
  () => import('app2/prompts'),
  { ssr: false }
)

const App1 = () => (<RemotePrompts />)

export default App1
