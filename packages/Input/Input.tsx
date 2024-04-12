interface Props {
  label: string;
}

const Input = ({ label }: Props) => {
  return (
    <>
      <div className="flex flex-col">
        <span className="text-left">{label}</span>
        <input className="border"></input>
      </div>
    </>
  );
};

export default Input;
