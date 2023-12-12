import dynamic from 'next/dynamic'

const RemoteChat = dynamic(
  () => import("app1/chat"),
  { ssr: false }
)

const App2 = () => (<RemoteChat />)

export default App2
