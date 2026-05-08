"use client"

import { useEffect, useState } from "react"

const ERROR_CODES = [
  { text: "ERR_CONNECTION_REFUSED", color: "text-red-500/15" },
  { text: "404_NOT_FOUND", color: "text-blue-500/15" },
  { text: "STACK_OVERFLOW", color: "text-orange-500/15" },
  { text: "SEGMENTATION_FAULT", color: "text-red-600/15" },
  { text: "MEMORY_LEAK", color: "text-green-500/15" },
  { text: "NPE_EXCEPTION", color: "text-purple-500/15" },
  { text: "ASYNC_LOOP_VOID", color: "text-cyan-500/15" },
  { text: "TYPE_MISMATCH", color: "text-yellow-500/15" },
  { text: "INTERNAL_SERVER_ERROR", color: "text-red-400/15" },
  { text: "BAD_GATEWAY", color: "text-gray-500/15" },
  { text: "FETCH_FAILED: TIMEOUT", color: "text-rose-500/15" },
  { text: "AUTH_TOKEN_EXPIRED", color: "text-amber-500/15" },
  { text: "PERMISSION_DENIED", color: "text-red-700/15" },
  { text: "CORS_BLOCK_REJECTED", color: "text-indigo-500/15" },
]

export default function ErrorBackground() {
  const [columns, setColumns] = useState<
    { id: number; delay: number; left: number; speed: number; fontSize: number; errors: number[] }[]
  >([])

  useEffect(() => {
    const nextColumns = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 8,
      left: (i / 18) * 100 + (Math.random() * 1.5 - 0.75),
      speed: 20 + Math.random() * 25,
      fontSize: 8 + Math.random() * 6,
      errors: Array.from({ length: 12 }).map(() => Math.floor(Math.random() * ERROR_CODES.length)),
    }))

    setColumns(nextColumns)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none bg-background/50">
      <div className="absolute inset-0 bg-radial-[at_center] from-transparent via-background/45 to-background z-10" />

      {columns.map((col) => (
        <div
          key={col.id}
          className="error-column absolute top-[-20%] font-mono whitespace-nowrap opacity-0 animate-fade-in"
          style={{
            left: `${col.left}%`,
            fontSize: `${col.fontSize}px`,
            animation: `fall ${col.speed}s linear infinite, fade-in 1s ease-out forwards`,
            animationDelay: `-${col.delay}s, 0s`,
          }}
        >
          {col.errors.map((errorIdx, i) => {
            const error = ERROR_CODES[errorIdx]
            return (
              <div key={i} className={`py-3 ${error.color}`}>
                {error.text}
              </div>
            )
          })}
        </div>
      ))}
      <style jsx global>{`
        @keyframes fall {
          from { transform: translateY(-20%); }
          to { transform: translateY(120vh); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 768px) {
          .error-column:nth-child(n + 9) {
            display: none;
          }
          .error-column {
            animation-duration: 42s !important;
            opacity: 0.55 !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .error-column {
            animation: none !important;
            opacity: 0.22 !important;
          }
        }
      `}</style>
    </div>
  )
}
