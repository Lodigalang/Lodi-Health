import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

function FormDaftar({ formData, handleChange }) {
  const [provinsiList, setProvinsiList] = useState([]);
  const [kotaList, setKotaList] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => {
        const options = res.data.map((prov) => ({
          value: prov.id,
          label: prov.name,
        }));
        setProvinsiList(options);
      })
      .catch((err) => console.error("Gagal ambil provinsi:", err));
  }, []);

  useEffect(() => {
    if (formData.provinsiId) {
      axios
        .get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${formData.provinsiId}.json`
        )
        .then((res) => {
          const options = res.data.map((kota) => ({
            value: kota.name,
            label: kota.name,
          }));
          setKotaList(options);
        })
        .catch((err) => console.error("Gagal ambil kota:", err));
    }
  }, [formData.provinsiId]);

  const inputs = [
    {
      label: "Nama Pengguna",
      name: "nama",
      type: "text",
      placeholder: "Nama Pengguna",
    },
    {
      label: "Alamat Email",
      name: "email",
      type: "email",
      placeholder: "Alamat Email",
    },
    {
      label: "Kata Sandi",
      name: "password",
      type: "password",
      placeholder: "Kata Sandi",
    },
    {
      label: "Konfirmasi Kata Sandi",
      name: "konfirmasiPassword",
      type: "password",
      placeholder: "Konfirmasi Kata Sandi",
    },
    {
      label: "Nomor HP",
      name: "nomorHp",
      type: "tel",
      placeholder: "08xxxxxxxxxx",
    },
  ];

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: "auto",
      overflowY: "auto",
      zIndex: 9999,
    }),
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {inputs.map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              required
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
            />
          </div>
        ))}

        {/* Select Provinsi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Provinsi
          </label>
          <Select
            options={provinsiList}
            styles={customStyles}
            placeholder="Pilih Provinsi"
            value={provinsiList.find(
              (opt) => opt.value === formData.provinsiId
            )}
            onChange={(selected) => {
              handleChange({
                target: { name: "provinsiId", value: selected.value },
              });
              handleChange({
                target: { name: "provinsi", value: selected.label }, // ⬅️ ini nama provinsi
              });
            }}
          />
        </div>

        {/* Select Kota */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kota/Kabupaten
          </label>
          <Select
            options={kotaList}
            styles={customStyles}
            placeholder="Pilih Kota/Kabupaten"
            value={kotaList.find((opt) => opt.value === formData.kota)}
            onChange={(selected) =>
              handleChange({
                target: { name: "kota", value: selected.value },
              })
            }
            isDisabled={!formData.provinsiId}
          />
        </div>

        {/* Alamat Rumah */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alamat Rumah
          </label>
          <textarea
            name="alamatRumah"
            rows="3"
            placeholder="Jl. Contoh Alamat No.123"
            required
            value={formData.alamatRumah}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default FormDaftar;
