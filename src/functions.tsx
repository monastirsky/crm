export const prepareDate = (date: string) => {
  return date.slice(0, 10) + " " + date.slice(11, 16);
};

export const crateStatusBlock = (status: string) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "50px",
        border: "1px solid black",
        padding: "5px 0",
        borderRadius: "5px",
        fontWeight: "bold",
        color: `${
          status === "assigned"
            ? "rgb(165, 165, 0)"
            : status === "completed"
            ? "green"
            : "gray"
        }`,
      }}
    >
      <span>
        {status === "assigned"
          ? " ASD"
          : status === "completed"
          ? " COM"
          : " UNA"}
      </span>
    </div>
  );
};
