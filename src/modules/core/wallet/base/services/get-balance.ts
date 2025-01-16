"use server"

import { prisma } from "@/lib/prisma"

export async function getUserBalance(userId : string) {
    const userBalance = await prisma.accountBalance.findFirst({
        where: {
            userId
        }
    })
    return userBalance?.balance || 0
}