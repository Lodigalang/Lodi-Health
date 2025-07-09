import { useState } from "react";
import { useAuthContext } from "../Components/Context/AuthContext";
import FormDaftar from "../Components/Form/FormDaftar";
import { toast } from "react-toastify";
import { createUser, getUserByEmail } from "../Api/userApi";

function Daftar(props) {
  const { login } = useAuthContext();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
    nomorHp: "",
    provinsiId: "",
    provinsi: "",
    kota: "",
    alamatRumah: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.konfirmasiPassword) {
      toast.error("Password dan konfirmasi tidak cocok!");
      return;
    }

    try {
      const existingUser = await getUserByEmail(formData.email);
      if (existingUser) {
        toast.warning("Email sudah terdaftar.");
        return;
      }

      const newUser = {
        nama: formData.nama,
        email: formData.email,
        password: formData.password,
        nomorHp: formData.nomorHp,
        provinsiId: formData.provinsiId,
        provinsi: formData.provinsi,
        kota: formData.kota,
        alamatRumah: formData.alamatRumah,
      };

      await createUser(newUser);

      toast.success("Pendaftaran berhasil!");
      login({ nama: newUser.nama, email: newUser.email });
      props.onClose?.();
    } catch (err) {
      toast.error("Gagal mendaftar");
    }
  };

  return (
    <div className="flex justify-center items-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-[800px] transform scale-[0.95] sm:scale-100 p-8 sm:p-10 md:p-12"
      >
        <button
          type="button"
          onClick={props.onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Tutup form"
          title="Tutup"
        >
          ×
        </button>

        <h2 className="text-center text-[#76b576] font-bold text-3xl mb-10">
          Daftar
        </h2>

        <FormDaftar formData={formData} handleChange={handleChange} />

        <button
          type="submit"
          className="mt-6 w-full bg-[#76b576] hover:bg-[#679d67] text-white font-semibold py-3 md:py-4 rounded-lg text-base transition"
        >
          Daftar
        </button>

        <p className="mt-8 text-center text-sm md:text-base text-gray-700">
          Sudah punya akun?{" "}
          <span
            className="text-[#76b576] hover:underline cursor-pointer"
            onClick={() => props.onFormChange?.("masuk")}
          >
            Masuk
          </span>
        </p>
      </form>
    </div>
  );
}

export default Daftar;
