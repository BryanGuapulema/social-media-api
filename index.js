import app from './src/app.js'
const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
