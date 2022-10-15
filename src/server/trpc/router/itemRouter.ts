import { z } from "zod"
import { createRouter } from "../context"

const itemRouter = createRouter().mutation('addItem', {
    input: z.object({
        name: z.string()
    }),
    resolve: async ({ input, ctx }) => {
        const { name } = input
              
        await ctx.prisma.shoppingItem.create({
            data: {
                name,
            }
        })
    } 
})