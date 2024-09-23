import { NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage"

export const GET = async () => {

  const b_cred = process.env.GOOGLE_CREDENTIALS_BASE64 || ""

  const _cred = JSON.parse(Buffer.from(b_cred, "base64").toString())
  console.log(_cred)

  const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT,
    credentials: _cred
  })

  const bucketName = process.env.GCLOUD_BUCKET || ""

  const bucket = storage.bucket(bucketName)
  const files = await bucket.getFiles()
  let fileNames = []
  const _items = await files[2].items
  _items.forEach((item) => {
    fileNames.push(item.name)
  })

  const res = NextResponse.json({ "data": fileNames })
  res.headers.set('Content-Type', 'application/json')
  return res
}