import FormMasuk from "../Components/Form/FormMasuk";
import { useAuthContext } from "../Components/Context/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import { getUserByEmail } from "../Api/userApi";

function Masuk(props) {
  const { login } = useAuthContext();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await getUserByEmail(formData.email);

      if (!user || user.password !== formData.password) {
        toast.error("Email atau password salah.");
        return;
      }

      login(user);
      toast.success(`Selamat datang, ${user.nama}`);
      props.onClose?.();
    } catch (err) {
      toast.error("Login gagal. Silakan coba lagi.");
    }
  };
  return (
    <div className="flex justify-center items-center px-2 py-8">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[800px]"
      >
        {/* Tombol X pojok kanan */}
        <button
          type="button"
          onClick={props.onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Tutup form"
          title="Tutup"
        >
          ×
        </button>

        <h2 className="text-center text-[#76b576] font-bold text-2xl sm:text-3xl mb-6 sm:mb-10">
          Masuk
        </h2>

        <FormMasuk formData={formData} handleChange={handleChange} />

        <div className="mt-4 text-right text-sm text-[#76b576] hover:underline cursor-pointer select-none">
          Lupa sandi?
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-[#76b576] hover:bg-[#679d67] text-white font-semibold py-3 rounded-lg text-sm sm:text-base transition"
        >
          Masuk
        </button>

        <p className="mt-8 text-center text-sm text-gray-700">
          Belum mempunyai akun?{" "}
          <span
            className="text-[#76b576] hover:underline cursor-pointer"
            onClick={() => props.onFormChange("daftar")}
          >
            Daftar
          </span>
        </p>
      </form>
    </div>
  );
}

export default Masuk;
