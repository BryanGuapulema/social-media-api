import z from 'zod'

const userSchema = z.object({
  username: z.string().min(0),
  password: z.string().min(6)
})

export function validateUser (object) {
  return userSchema.safeParse(object)
}

export function validatePartialUser (object) {
  return userSchema.partial().safeParse(object)
}
