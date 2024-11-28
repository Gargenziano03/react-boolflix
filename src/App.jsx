import AppHeader from "./components/AppHeader"
import { MyProvider } from "./GlobalContext/GlobalContext"
import AppMain from "./components/AppMain"

function App() {

  return (
    <>
      <MyProvider>
        <AppHeader />
        <AppMain />
      </MyProvider>
    </>
  )
}

export default App
