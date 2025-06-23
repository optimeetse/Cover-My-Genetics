"use client"

import { useActionState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import { loginUser } from "@/app/actions/auth"

export default function LoginPage() {
  const [state, action, isPending] = useActionState(loginUser, null)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Login to Cover My Genetics</h1>
            <p className="text-gray-600 mt-2">Access your genetic insights</p>
          </div>

          {state && (
            <div
              className={`p-4 rounded-lg flex items-center gap-3 ${
                state.success
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {state.success ? (
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
              )}
              <p className="text-sm">{state.message}</p>
            </div>
          )}

          <form action={action} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required disabled={isPending} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-pink-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" name="password" type="password" required disabled={isPending} />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="text-center text-sm">
            <p>
              Don't have an account?{" "}
              <Link href="/signup" className="text-pink-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
