import GenieChatInterface from "@/components/genie-chat-interface"
import Navbar from "@/components/navbar"

export default function AskGeniePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <GenieChatInterface />
      </div>
    </main>
  )
}
