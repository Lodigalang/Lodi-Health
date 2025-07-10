import { useState, useEffect } from "react";
import Select from "react-select";
import { getUserByEmail } from "../../Api/userApi";
import { useAuthContext } from "../Context/AuthContext";
import { useFormModal } from "../Context/FormContext";
import {
  getProvinces,
  getCitiesByProvinceId,
  getHospitals,
  getDoctors,
  createBooking,
} from "../../Api/bookingApi";
import { toast } from "react-toastify";

const timeSlots = [
  "08:00-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "13:00-14:00",
  "14:00-15:00",
];

function BookingForm(props) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    province: "",
    provinceId: "",
    location: "",
    hospital: "",
    specialist: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [hospitalRaw, setHospitalRaw] = useState([]);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [doctorRaw, setDoctorRaw] = useState([]);
  const [specialistOptions, setSpecialistOptions] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const { user } = useAuthContext();
  const { setFormAktif } = useFormModal();

  useEffect(() => {
    const dateInput = document.getElementById("date");
    if (dateInput) {
      dateInput.min = new Date().toISOString().split("T")[0];
    }

    getProvinces()
      .then((data) => {
        const options = data.map((prov) => ({
          value: prov.id,
          label: prov.name,
        }));
        setProvinces(options);
      })
      .catch((err) => console.error("Gagal ambil provinsi:", err));

    getHospitals()
      .then(setHospitalRaw)
      .catch((err) => console.error("Gagal ambil data rumah sakit:", err));

    getDoctors()
      .then(setDoctorRaw)
      .catch((err) => console.error("Gagal ambil data dokter:", err));
  }, []);

  useEffect(() => {
    if (formData.provinceId) {
      getCitiesByProvinceId(formData.provinceId)
        .then((data) => {
          const options = data.map((city) => ({
            value: city.name,
            label: city.name,
          }));
          setCities(options);
        })
        .catch((err) => console.error("Gagal ambil kota:", err));
    }
  }, [formData.provinceId]);

  useEffect(() => {
    if (formData.province && formData.location) {
      const filtered = hospitalRaw.filter(
        (rs) =>
          rs.province.toLowerCase() === formData.province.toLowerCase() &&
          rs.region.toLowerCase().includes(formData.location.toLowerCase())
      );
      setFilteredHospitals(
        filtered.map((rs) => ({
          value: rs.name,
          label: `${rs.name} (${rs.region})`,
        }))
      );
      setFormData((prev) => ({
        ...prev,
        hospital: "",
        specialist: "",
        doctor: "",
      }));
    }
  }, [formData.province, formData.location, hospitalRaw]);

  useEffect(() => {
    if (formData.hospital) {
      const spesialisInHospital = Array.from(
        new Set(
          doctorRaw
            .filter((doc) => doc.hospital === formData.hospital)
            .map((doc) => doc.specialization)
        )
      ).map((spec) => ({ value: spec, label: spec }));
      setSpecialistOptions(spesialisInHospital);
      setFormData((prev) => ({ ...prev, specialist: "", doctor: "" }));
    }
  }, [formData.hospital, doctorRaw]);

  useEffect(() => {
    if (formData.specialist && formData.hospital) {
      const filtered = doctorRaw.filter(
        (doc) =>
          doc.specialization === formData.specialist &&
          doc.hospital === formData.hospital
      );
      setFilteredDoctors(
        filtered.map((doc) => ({
          value: doc.name,
          label: doc.name,
        }))
      );
    } else {
      setFilteredDoctors([]);
    }
  }, [formData.specialist, formData.hospital, doctorRaw]);

  useEffect(() => {
    if (user?.email) {
      getUserByEmail(user.email)
        .then((userData) => {
          if (userData) {
            setFormData((prev) => ({
              ...prev,
              fullName: userData.nama || "",
              email: userData.email || "",
              phone: userData.nomorHp || "",
              province: userData.provinsi || "",
              provinceId: userData.provinsiId || "",
              location: userData.kota || "",
            }));
          }
        })
        .catch((err) => console.error("Gagal ambil data user:", err));
    }
  }, [user]);

  const handleChange = ({ target: { id, value, name } }) => {
    const key = id || name;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleTimeClick = (time) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      toast.warning("Silakan login terlebih dahulu untuk membuat janji.");
      setFormAktif("masuk");
      return;
    }

    if (!formData.time) {
      return toast.warning("Silakan pilih jam untuk janji temu");
    }

    // Data yang akan dikirim ke API
    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      province: formData.province,
      provinceId: formData.provinceId,
      location: formData.location,
      hospital: formData.hospital,
      specialist: formData.specialist,
      doctor: formData.doctor,
      date: formData.date,
      time: formData.time,
      notes: formData.notes,
    };

    createBooking(dataToSend)
      .then(() => {
        toast.success("Janji berhasil dibuat!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          province: "",
          provinceId: "",
          location: "",
          hospital: "",
          specialist: "",
          doctor: "",
          date: "",
          time: "",
          notes: "",
        });
        if (props.onSuccess) props.onSuccess();
      })
      .catch((err) => {
        console.error("Gagal submit janji:", err);
        toast.error("Terjadi kesalahan saat membuat janji. Coba lagi nanti.");
      });
  };

  const renderInput = (id, label, type = "text", required = true) => (
    <div className="mt-4">
      <label htmlFor={id} className="block text-gray-700 mb-2">
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg"
        value={formData[id]}
        onChange={handleChange}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full">
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="text-center space-y-5">
          <h2 className="text-3xl font-bold">Booking Dokter</h2>
          <p>Pilih rumah sakit, dokter, dan spesialisasi yang tersedia</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 text-center">
            Informasi Pasien
          </h2>
          {renderInput("fullName", "Nama Lengkap")}
          {renderInput("email", "Email", "email")}
          {renderInput("phone", "Nomor HP", "tel")}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2">
            Detail Janji Temu
          </h2>

          <div className="mt-4">
            <label className="block text-gray-700 mb-2">Provinsi*</label>
            <Select
              options={provinces}
              placeholder="Pilih Provinsi"
              value={provinces.find((opt) => opt.value === formData.provinceId)}
              onChange={(selected) => {
                handleChange({
                  target: { name: "provinceId", value: selected.value },
                });
                handleChange({
                  target: { name: "province", value: selected.label },
                });
              }}
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 mb-2">Kota/Kabupaten*</label>
            <Select
              options={cities}
              placeholder="Pilih Kota/Kabupaten"
              value={cities.find((opt) => opt.value === formData.location)}
              onChange={(selected) =>
                handleChange({
                  target: { name: "location", value: selected.value },
                })
              }
              isDisabled={!formData.provinceId}
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 mb-2">
              Pilih Rumah Sakit* (Jika daftar tidak muncul, berarti belum
              tersedia di wilayah yang dipilih)
            </label>
            <Select
              options={filteredHospitals}
              placeholder="Pilih Rumah Sakit"
              value={filteredHospitals.find(
                (opt) => opt.value === formData.hospital
              )}
              onChange={(selected) =>
                handleChange({
                  target: { name: "hospital", value: selected.value },
                })
              }
              isDisabled={!filteredHospitals.length}
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 mb-2">
              Pilih Spesialisasi* (Jika daftar tidak muncul, berarti
              spesialisasi belum tersedia di rumah sakit tersebut)
            </label>
            <Select
              options={specialistOptions}
              placeholder="Pilih Spesialisasi"
              value={specialistOptions.find(
                (opt) => opt.value === formData.specialist
              )}
              onChange={(selected) =>
                handleChange({
                  target: { name: "specialist", value: selected.value },
                })
              }
              isDisabled={!formData.hospital}
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 mb-2">
              Pilih Dokter* (Jika daftar tidak muncul, berarti belum tersedia
              dokter untuk spesialisasi tersebut)
            </label>
            <Select
              options={filteredDoctors}
              placeholder="Pilih Dokter"
              value={filteredDoctors.find(
                (opt) => opt.value === formData.doctor
              )}
              onChange={(selected) =>
                handleChange({
                  target: { name: "doctor", value: selected.value },
                })
              }
              isDisabled={!formData.specialist || !filteredDoctors.length}
            />
          </div>

          {renderInput("date", "Tanggal Janji Temu", "date")}

          <div className="mt-4">
            <label className="block text-gray-700 mb-3">Pilih Jam*</label>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((slot, i) => (
                <div
                  key={i}
                  onClick={() => handleTimeClick(slot)}
                  className={`rounded-xl border py-3 text-center cursor-pointer ${
                    formData.time === slot
                      ? "bg-[#70bc70] text-white"
                      : "bg-white"
                  }`}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="notes" className="block text-gray-700 mb-2">
              Catatan (Opsional)
            </label>
            <textarea
              id="notes"
              rows="3"
              placeholder="Gejala atau keluhan khusus"
              className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#70bc70] hover:bg-[#69b069] text-white w-full py-4 px-6 font-bold rounded-xl shadow-md mt-8 text-lg"
        >
          Buat Janji
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
