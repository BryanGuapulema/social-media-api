import z from 'zod'

const commentSchema = z.object({
  comment: z.string().min(1)
  // userId: z.string().length(24)),
  // postId: z.string().length(24)),
})

export function validateComment (object) {
  return commentSchema.safeParse(object)
}

export function validatePartialComment (object) {
  return commentSchema.partial().safeParse(object)
}
