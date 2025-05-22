import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "Rahul",
    Address: {
      city: "Jaipur",
      country: "India",
    },
  });

  const nameHandler = (name) => {
    let temporary = user;
    user.name = name;

    setUser({ ...user });
  };

  const cityHandler = (city) => {
    let temporary = user;
    user.Address.city = city;
    setUser({ ...user });
  };

  const countryHandler = (country) => {
    let temporary = user;
    user.Address.country = country;
    setUser({ ...user });
  };
  return (
    <div
      style={{
        marginLeft: "800px",
      }}
    >
      <h1 style={{ marginLeft: "-120px" }}>Use Object in State</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          style={{ width: "200px", height: "25px", borderRadius: "3px" }}
          onChange={(event) => nameHandler(event.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Enter City"
          style={{ width: "200px", height: "25px", borderRadius: "3px" }}
          onChange={(event) => cityHandler(event.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="Enter Country"
          style={{ width: "200px", height: "25px", borderRadius: "3px" }}
          onChange={(event) => countryHandler(event.target.value)}
        />

        <h2>Name:{user.name}</h2>
        <h2>City:{user.Address.city}</h2>
        <h2>Country:{user.Address.country}</h2>
      </div>
    </div>
  );
};
export default App;
