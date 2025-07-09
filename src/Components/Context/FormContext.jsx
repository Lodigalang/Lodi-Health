import { createContext, useContext, useState, useEffect } from "react";
import Masuk from "../../pages/Masuk";
import Daftar from "../../pages/Daftar";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formAktif, setFormAktif] = useState(null); // 'masuk' | 'daftar' | null

  // Cegah scroll saat form aktif
  useEffect(() => {
    document.body.classList.toggle("body-lock", !!formAktif);
    return () => document.body.classList.remove("body-lock");
  }, [formAktif]);

  // Komponen Modal (otomatis tampil kalau formAktif != null)
  let kontenForm = null;
  if (formAktif === "masuk") {
    kontenForm = (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50">
        <Masuk onClose={() => setFormAktif(null)} onFormChange={setFormAktif} />
      </div>
    );
  } else if (formAktif === "daftar") {
    kontenForm = (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50">
        <Daftar
          onClose={() => setFormAktif(null)}
          onFormChange={setFormAktif}
        />
      </div>
    );
  }

  return (
    <FormContext.Provider value={{ formAktif, setFormAktif }}>
      {children}
      {kontenForm}
    </FormContext.Provider>
  );
}

export function useFormModal() {
  return useContext(FormContext);
}

export default FormProvider;
