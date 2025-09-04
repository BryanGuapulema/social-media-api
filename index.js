import { app } from './src/app.js'
import { connectDB } from './src/config/db.js'
const PORT = process.env.PORT ?? 8000

connectDB()

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
