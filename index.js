import { app } from './src/app.js'
import { connectDB } from './src/config/db.js'
const PORT = process.env.PORT ?? 1234

connectDB()

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
