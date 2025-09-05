import z from 'zod'

const postSchema = z.object({
  title: z.string().min(1),
  desc: z.string(),
  author: z.string().length(24),
  comments: z.array(z.string().length(24)),
  likes: z.number().int().min(0)
})

export function validatePost (object) {
  return postSchema.safeParse(object)
}

export function validatePartialPost (object) {
  return postSchema.partial().safeParse(object)
}
