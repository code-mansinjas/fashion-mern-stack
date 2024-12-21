import { RouterProvider } from "react-router-dom"
import router from "./router"
import Layout from "./Layout"
import { Suspense } from "react"
import Loading from "./components/Loading"




function App() {

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </Layout>
  )
}

export default App
