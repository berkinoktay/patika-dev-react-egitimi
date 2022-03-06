function Header() {
  return (
    <>
      <p className="dark">Burası header componentinden gelmektedir.</p>
      <label htmlFor="input">
        Tıkla!
        <input id="input" typeof="text"></input>
      </label>
    </>
  );
}

export default Header;
