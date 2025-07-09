function FormMasuk({ formData, handleChange }) {
  const inputs = [
    {
      id: "nama",
      name: "nama",
      type: "text",
      label: "Nama Pengguna",
      placeholder: "Nama Pengguna",
      autoComplete: "username",
      required: true,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      label: "Kata Sandi",
      placeholder: "Masukkan kata sandi",
      autoComplete: "current-password",
      required: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
      {inputs.map(
        ({ id, name, type, label, placeholder, autoComplete, required }) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {label}
            </label>
            <input
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              autoComplete={autoComplete}
              required={required}
              value={formData[name] || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        )
      )}
    </div>
  );
}

export default FormMasuk;
