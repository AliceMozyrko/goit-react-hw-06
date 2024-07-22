import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../redux/store';
import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import css from "./App.module.css"

export default function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
       <div className={css.container}>
          <h1>Phonebook</h1>
          <ContactForm/>
          <SearchBox/>
          <ContactList/>
       </div>
     </PersistGate>
  );
}


