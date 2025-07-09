import { useState, useEffect } from "react";
import { useAuthContext } from "../Components/Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../Api/userApi";

function Setting() {
  const { user, logout, updateUserContext } = useAuthContext();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    nomorHp: "",
    alamatRumah: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nama: user.nama || "",
        email: user.email || "",
        nomorHp: user.nomorHp || "",
        alamatRumah: user.alamatRumah || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (
      formData.nama === user.nama &&
      formData.nomorHp === user.nomorHp &&
      formData.alamatRumah === user.alamatRumah
    ) {
      toast.info("Tidak ada perubahan yang dilakukan.");
      return;
    }

    try {
      const updatedUser = await updateUser(user.id, formData);
      updateUserContext(updatedUser);
      toast.success("Profil berhasil diperbarui!");
      setEditMode(false);
    } catch {
      toast.error("Gagal memperbarui profil.");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      toast.error("Konfirmasi password baru tidak cocok.");
      return;
    }

    if (passwordData.currentPassword !== user.password) {
      toast.error("Password lama salah.");
      return;
    }

    try {
      const updatedUser = await updateUser(user.id, {
        ...formData,
        password: passwordData.newPassword,
      });
      updateUserContext(updatedUser);
      toast.success("Password berhasil diganti.");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch {
      toast.error("Gagal mengganti password.");
    }
  };

  const handleLogout = () => {
    logout();
    toast.info("Berhasil keluar");
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#569956] to-[#5c905f] text-gray-800">
      <button
        onClick={() => navigate("/")}
        className="text-white hover:underline ml-3 mt-5"
      >
        <div className="absolute top-5 left-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </button>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-center items-center mb-10">
          <h1 className="text-3xl font-bold text-white">Pengaturan Akun</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Profil */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-6 text-green-600">
              Edit Profil
            </h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <InputField
                label="Nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                disabled={!editMode}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                disabled
              />
              <InputField
                label="Nomor HP"
                name="nomorHp"
                value={formData.nomorHp}
                onChange={handleChange}
                disabled={!editMode}
              />
              <TextareaField
                label="Alamat Rumah"
                name="alamatRumah"
                value={formData.alamatRumah}
                onChange={handleChange}
                disabled={!editMode}
              />

              <div className="flex justify-between items-center">
                {editMode ? (
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Simpan
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setEditMode(true)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit Profil
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Keluar
                </button>
              </div>
            </form>
          </div>

          {/* Form Ganti Password */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-6 text-blue-600">
              Ganti Password
            </h2>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <InputField
                label="Password Lama"
                name="currentPassword"
                type="password"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
              />
              <InputField
                label="Password Baru"
                name="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
              <InputField
                label="Konfirmasi Password Baru"
                name="confirmNewPassword"
                type="password"
                value={passwordData.confirmNewPassword}
                onChange={handlePasswordChange}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Simpan Password Baru
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, type = "text", disabled }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full border px-4 py-2 rounded-lg text-sm ${
          disabled ? "bg-gray-100" : ""
        }`}
      />
    </div>
  );
}

function TextareaField({ label, name, value, onChange, disabled }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        name={name}
        rows="3"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full border px-4 py-2 rounded-lg text-sm ${
          disabled ? "bg-gray-100" : ""
        }`}
      />
    </div>
  );
}

export default Setting;
