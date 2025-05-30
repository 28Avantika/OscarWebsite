// client/src/hooks/useGeolocation.ts
import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [location, setLocation] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => console.error(err)
    );
  }, []);

  return location;
}