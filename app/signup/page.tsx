"use client"

import { useActionState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, AlertCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import { signupUser } from "@/app/actions/auth"

export default function SignupPage() {
  const [state, action, isPending] = useActionState(signupUser, { success: false, message: "" })

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Create an Account</h1>
            <p className="text-gray-600 mt-2">Start your genetic journey today</p>
          </div>

          {state && state.message && (
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required disabled={isPending} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required disabled={isPending} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required disabled={isPending} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required disabled={isPending} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required disabled={isPending} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-pink-600 hover:underline">
                  terms of service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-pink-600 hover:underline">
                  privacy policy
                </Link>
              </label>
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
          <div className="text-center text-sm">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-pink-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
