import axios from "axios";

export const getProvinces = () =>
  axios
    .get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
    .then((res) => res.data);

export const getCitiesByProvinceId = (provinceId) =>
  axios
    .get(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
    )
    .then((res) => res.data);

export const getHospitals = () =>
  axios
    .get(
      "https://raw.githubusercontent.com/Lodigalang/web-health/refs/heads/main/hospital.json"
    )
    .then((res) => res.data);

export const getDoctors = () =>
  axios
    .get(
      "https://raw.githubusercontent.com/Lodigalang/web-health/refs/heads/main/dokter/doctors.json"
    )
    .then((res) => res.data);

export const createBooking = (bookingData) =>
  axios.post(
    "https://686e7ba691e85fac429df13f.mockapi.io/BookingForm",
    bookingData
  );
