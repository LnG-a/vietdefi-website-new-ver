interface Props {
  employees: {
    id: String;
    name: String;
    image: String;
    position: String;
  };
}

export default function SlideEmployee(props: Props) {
  return (
    <div className="box">
      <div
        className="content-image"
        style={{
          background: `url(${props.employees.image}) no-repeat`,
          width: 229,
          height: 351,
          borderRadius: 8,
        }}
      ></div>
      <div className="box-image_name">
        <h3>{props.employees.name}</h3>
        <p>{props.employees.position}</p>
      </div>
    </div>
  );
}
