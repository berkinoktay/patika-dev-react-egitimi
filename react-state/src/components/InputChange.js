import { useState } from 'react';

function InputChange() {
  const [form, setForm] = useState({ name: '', surname: '' });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Obje içerisindeki veriyi değiştiriyoruz
  };
  return (
    <div>
      <h1>Form işlemleri</h1>
      İsim
      <input name="name" value={form.name} onChange={onChangeInput} />
      <br />
      <br></br>
      Soyisim
      <input name="surname" value={form.surname} onChange={onChangeInput} />
      <br></br>
      {form.name} {form.surname}
    </div>
  );
}

export default InputChange;
