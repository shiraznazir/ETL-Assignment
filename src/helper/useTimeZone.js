import { useState, useEffect } from "react";

const useTimeZone = () => {
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    const fetchTimeZones = async () => {
      try {
        const timeZoneList = await fetchTimeZonesFromAPI();
        setTimeZones(timeZoneList);
      } catch (error) {
        console.error("Error fetching time zones:", error);
      }
    };

    fetchTimeZones();
  }, []);

  const fetchTimeZonesFromAPI = async () => {
    const timeZoneList = await Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZoneList.split(", ");
  };

  return timeZones;
};

export default useTimeZone;
