import { useRef } from "react";

export default function AccesoDOM() {
  const ejemploRef = useRef("");
  const resultRef = useRef(null);

  const algo = () => {
    resultRef.current.innerHTML = ejemploRef.current.value;
  };
  return (
    <div>
      <input type="text" ref={ejemploRef} />
      <button onClick={algo}>Hace algo</button>
      <div ref={resultRef} />
    </div>
  );
}
