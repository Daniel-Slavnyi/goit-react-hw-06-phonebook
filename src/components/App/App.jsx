import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Wrapper, Title } from './App.styled';

export default function App() {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
}
