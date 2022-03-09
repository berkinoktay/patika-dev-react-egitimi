import { useState } from 'react';

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ tamAd: '', tel: '' });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const formSubmit = (e) => {
    e.preventDefault();

    if (form.tamAd === '' || form.tel === '') {
      return false;
    }
    console.log(form);
    addContact([...contacts, form]);
    setForm({ tamAd: '', tel: '' });
  };
  return (
    <form onSubmit={formSubmit}>
      <div>
        <input
          type="text"
          placeholder="Tam Adınız"
          name="tamAd"
          onChange={onChangeInput}
          value={form.tamAd}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Telefon Numaranız"
          name="tel"
          onChange={onChangeInput}
          value={form.tel}
        />
      </div>
      <button type="submit">Kişiyi Ekle</button>
    </form>
  );
}

export default Form;
