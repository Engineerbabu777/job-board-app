// add code to save image in cloudinary!
import cloudinary from '@/lib/cloudinary'

import { NextRequest, NextResponse } from 'next/server'

export async function POST (req: NextRequest) {
  try {
    const data = await req.json()

    const result = await cloudinary.uploader.upload(data.file)

    return NextResponse.json(result)
  } catch (error) {
    console.log('create prompt error', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
