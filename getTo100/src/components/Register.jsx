function Register() {
  function addPlayer(name) {
    if (localStorage.getItem(name) === null) {
      localStorage.setItem(name, JSON.stringify([]));
    }
  }
  const getNameValue = (event) => {
    event.preventDefault();
    const value = event.target.elements.myInput.value;
    addPlayer(value);
    event.target.elements.myInput.value = "";
  };

  return (
    <>
      <form onSubmit={getNameValue}>
        <input name="myInput" type="text" placeholder="הכנס שם: " />
        <button type="submit">כניסה</button>
      </form>
    </>
  );
}
export default Register;
