import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    if (contacts.some(c => c.name === name.value)) {
      alert('Контакт вже існує');
      return;
    }

    dispatch(addContact(name.value, number.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required />
      <input name="number" required />
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
