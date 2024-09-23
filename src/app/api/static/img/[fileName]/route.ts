import { NextResponse, NextRequest } from "next/server"
import { Storage } from "@google-cloud/storage"

export const GET = async (req: NextRequest) => {
  const fileName = req.url?.split('/').pop() || ""
  const b_cred = process.env.GOOGLE_CREDENTIALS_BASE64 || ""

  const _cred = JSON.parse(Buffer.from(b_cred, "base64").toString())
  const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT,
    credentials: _cred
  })

  const bucketName = process.env.GCLOUD_BUCKET || ""

  const bucket = storage.bucket(bucketName)
  const file = bucket.file(fileName)
  const blob = await file.download()
  const meta = await file.getMetadata()
  const contentType = meta[0].contentType || "image/png"

  const res = new NextResponse(blob[0], {status: 200, statusText: "OK"})
  res.headers.append("Content-Type", contentType)
  return res
}