export const Card = ({ className, h3, h2 }) => {
  return (
    <div class={className}>
      <h3>{h3}</h3>
      <p>For Individual</p>
      <h2>{h2}</h2>
    </div>
  );
};
