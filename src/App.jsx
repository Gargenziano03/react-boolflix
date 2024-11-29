import { MyProvider } from "./GlobalContext/GlobalContext"
import AppHeader from "./components/AppHeader"
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
