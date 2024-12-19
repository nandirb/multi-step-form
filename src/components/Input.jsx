export const Input = ({ label, value, onChange, error, id, type }) => {
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        required
        type={type}
        className="border p-2 rounded-md"
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-red-600 font-medium">{error}</span>}
    </div>
  );
};
