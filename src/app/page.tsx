import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Chat-first Productivity App</h1>
        <p className="text-muted-foreground text-lg">
          Branching conversations, seamless workspace integration.
        </p>
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="Enter your email" />
        <Button>Start Chat</Button>
      </div>
    </main>
  )
}
