import { useState } from "react";

const useComePage = () => {
  const [formData, setFormData] = useState({
    start: "",
    end: "",
  });

  const handleChangeFormData = (type) => (e) => {
    const value = e.target.value;

    setFormData({ ...formData, [type]: value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return {
    formData,
    handleChangeFormData,
    handleSearch,
  };
};

export default useComePage;
