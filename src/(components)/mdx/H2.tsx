import React from "react"

export default function P({ children }: { children?: React.ReactNode }) {
  return <h2 className="mdx-h2">{children}</h2>
}