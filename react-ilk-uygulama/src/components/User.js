// Propslara tip belirtmemizi sağlar.
import PropTypes from 'prop-types';
function User({ name, surName, age, friends, address, isLoggedIn }) {
  // {name, surname, age ...} yerine belirlediğimiz bir ismi yazarak hepsini obje içerisinde alabiliriz.

  if (!isLoggedIn) {
    // Fonksiyondan hemen sonra işlemler yapıp return edersek early return uygulanmakta ve aşağıdaki return çalışmamaktadır.
    return <div>Giriş Yapılamadı</div>;
  }

  return (
    <>
      <h2>{`${name} ${surName} ${age}`}</h2>
      {address.title} {address.zip}
      <br />
      <br />
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
    </>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // oneOfType metodu ile birden fazla tip eklenmesi sağlanabilir
  isLoggedIn: PropTypes.bool.isRequired,
  friends: PropTypes.array,
  address: PropTypes.shape({
    // Objeler içerisinde tanımlı keylerin her birisine ayrı veri tipi tanımlamamızı sağlar.
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};
// Gönderilmeyen props değerleri için default olarak gönderilen verileri ayarlamamızı sağlar.
User.defaultProps = {
  name: 'Gizli',
  surName: 'Gizli',
  isLoggedIn: false,
};
export default User;
