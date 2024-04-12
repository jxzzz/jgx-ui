const Card = ({ children }: any) => {
  return (
    <>
      <div className="bg-slate-100 rounded-xl py-1 px-1  shadow-lg">
        {children}
      </div>
    </>
  );
};

export default Card;
