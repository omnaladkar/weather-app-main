import { useContext, useRef } from "react";
import AppContext from "../provider/appContext";
import { getCityName } from "../services/weatherService";
import geoCoords from "../utils/geoCoords";

function CityInput() {
  const input = useRef();
  const {
    app: { isDark },
    dispatchApp,
  } = useContext(AppContext);

  let timeout = 3000;

  const handleInputChange = async (e) => {
    const value = e.target.value;
    clearTimeout(timeout);

    timeout = setTimeout(async () => {
      // Your search logic here
      dispatchApp({ type: "CITY", payload: value });
    }, 500);
  };

  const handleGeolocationClick = async () => {
    const coords = await geoCoords();
    dispatchApp({
      type: "GEO_COORDS",
      payload: { lon: coords.longitude, lat: coords.latitude },
    });
    const { country, name } = await getCityName(
      coords.longitude,
      coords.latitude
    );
    dispatchApp({ type: "COUNTRY", payload: country });
    dispatchApp({ type: "CITY", payload: name });
    input.current.value = "";
  };

  return (
    <div className="input-group">
      <span
        onClick={handleGeolocationClick}
        style={isDark ? { background: "#37435a" } : null}
      >
        <i
          className="fa-solid fa-location-crosshairs location-icon"
          style={isDark ? { color: "#FFFFFF" } : null}
        ></i>
      </span>
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <input
        type="text"
        ref={input}
        style={isDark ? { background: "#232b39", color: "#fff" } : null}
        placeholder="Search for places ..."
        onChange={handleInputChange}
      />
    </div>
  );
}



export default CityInput;
