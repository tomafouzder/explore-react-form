import './App.css'
import ControlledField from './components/ControlledField/ControlledField'
import FormAction from './components/FormAction/FormAction'
import HookForm from './components/HookForm/HookForm'
import ProductManagement from './components/ProductManagement/ProductManagement'
import SimpleForm from './components/SimpleForm/SimpleForm'
import UnControlledField from './components/UnControlledField/UnControlledField'

function App() {

  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <UnControlledField></UnControlledField> */}
      {/* <HookForm></HookForm> */}
      <ProductManagement></ProductManagement>
    </>
  )
}

export default App
