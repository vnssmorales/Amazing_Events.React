import "./header.css";
export const Header = ({title}) => { //componente header acepta una prop title al exportarse
  return (
    <>
      <div className="contenedor">
        <h1>{title}</h1>
      </div>
    </>
  );
};
