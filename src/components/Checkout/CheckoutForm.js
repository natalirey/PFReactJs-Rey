import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div>
      <form
        onSubmit={handleConfirm}
        className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label
            className="block text-gray-600 font-semibold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-semibold mb-2"
            htmlFor="phone"
          >
            Celular
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          Terminar compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
