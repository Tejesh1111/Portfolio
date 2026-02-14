"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { ArrowLeft, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

const DOCUMENTS: Record<string, { title: string; driveId: string }> = {
  resume: {
    title: "Resume - Gadde Tejesh",
    driveId: "1Gizl6y54yB8xAGniIsqW0OT3KtPdpN9N",
  },
  "nptel-internship": {
    title: "NPTEL Internship Certificate",
    driveId: "1WkZgJRldj-Bgx8tZlc0zN2f48wcHrnGB",
  },
  "professor-certificate": {
    title: "Professor Internship Certificate",
    driveId: "1OwFYh9AQjw7opbxkj955mx8ThhVUQeiv",
  },
  "nptel-java": {
    title: "NPTEL - Programming in Java (Elite + Silver)",
    driveId: "1izjytoebExZry2OtjGnA5q6MltUTqrst",
  },
}

function DocumentViewer() {
  const searchParams = useSearchParams()
  const docKey = searchParams.get("doc") || ""
  const doc = DOCUMENTS[docKey]

  if (!doc) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
        <h1 className="text-2xl font-bold">Document not found</h1>
        <Link
          href="/"
          className="flex items-center gap-2 text-primary transition-opacity hover:opacity-80"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>
    )
  }

  const previewUrl = `https://drive.google.com/file/d/${doc.driveId}/preview`
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${doc.driveId}`
  const driveUrl = `https://drive.google.com/file/d/${doc.driveId}/view`

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur-lg md:px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
          </Link>
          <div className="hidden h-5 w-px bg-border sm:block" />
          <h1 className="max-w-[200px] truncate text-sm font-medium text-foreground sm:max-w-none">
            {doc.title}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Open in Drive</span>
          </a>
          <a
            href={downloadUrl}
            className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download
          </a>
        </div>
      </header>

      {/* Document embed */}
      <main className="flex flex-1 items-stretch">
        <iframe
          src={previewUrl}
          className="h-[calc(100vh-57px)] w-full border-0"
          title={doc.title}
          allow="autoplay"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </main>
    </div>
  )
}

export default function ViewPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
          Loading document...
        </div>
      }
    >
      <DocumentViewer />
    </Suspense>
  )
}
