import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function FormKontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subjek: "",
    pesan: "",
  });

  const fields = [
    {
      label: "Nama",
      name: "name",
      type: "text",
      placeholder: "Nama Anda",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "lodihealth@gmail.com",
      required: true,
    },
    {
      label: "Nomer Telepon",
      name: "phone",
      type: "tel",
      placeholder: "+123456789",
      required: false,
      optionalNote: "(Optional)",
    },
    {
      label: "Subjek",
      name: "subjek",
      type: "text",
      placeholder: "Subjek Pesan",
      required: true,
    },
    {
      label: "Pesan",
      name: "pesan",
      type: "textarea",
      placeholder: "Tulis pesan",
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://686e7ba691e85fac429df13f.mockapi.io/Kontak",
        formData
      );

      toast.success("Pesan berhasil dikirim!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subjek: "",
        pesan: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Gagal mengirim pesan.");
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-[#569956] to-[#5c905f] p-8 rounded-xl shadow-lg"
      data-aos="zoom-in-left"
    >
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div className="mb-4" key={index}>
            <label className="block text-gray-800 mb-2">
              {field.label}
              {field.optionalNote && (
                <span className="text-xs text-gray-300 ml-1">
                  {field.optionalNote}
                </span>
              )}
              {!field.optionalNote && field.required && (
                <span className="text-xs text-red-400 ml-1">*</span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none h-24"
              ></textarea>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-white text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 hover:text-gray-600 transition"
        >
          KIRIM
        </button>
      </form>
    </div>
  );
}

export default FormKontak;
