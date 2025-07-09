import BookingForm from "../Components/Reservasi/BookingForm";
import HeroReservasi from "../Components/Reservasi/HeroReservasi";
import SuksesModal from "../Components/Reservasi/SuksesModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Reservasi() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalVisible(true);

  const closeModal = () => {
    setModalVisible(false);
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroReservasi />
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl overflow-hidden p-10 shadow-xl">
            <BookingForm onSuccess={openModal} />
            <SuksesModal visible={modalVisible} onClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservasi;
