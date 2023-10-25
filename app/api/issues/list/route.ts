import prisma from '@/prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import React from 'react'

export async function GET(request: NextRequest) {
    const Issues = await prisma.issue.findMany();
    // console.log(JSON.stringify(Issues));
    return NextResponse.json(Issues, { status: 201 })
}
