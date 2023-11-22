import "../../styles/General.css";

function General({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
}) {
  return (
    <div className="div-general">
      <h2>General Information</h2>
      <div className="form-general">
        <label htmlFor="input-name">Your full name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="input-name"
        />
        <label htmlFor="input-email">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="input-email"
        />
        <label htmlFor="input-phone">Phone number:</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id="input-phone"
        />
        <label htmlFor="input-address">Address:</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          id="input-address"
        />
      </div>
    </div>
  );
}

export default General;
