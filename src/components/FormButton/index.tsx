const FormButton = ({ value, loading = false, disabled = false }: any) => {
  return (
    <button type="submit" className="form__button w-100" disabled={disabled}>
      {loading ? "Loading" : value}
    </button>
  );
};

export default FormButton;
