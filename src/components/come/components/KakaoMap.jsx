import { useEffect, useRef, useState } from "react";
import Loader from "../lib/Loader";

const KakaoMap = () => {
  const [isLoaded, setLoaded] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    const loader = new Loader().execute();
    const onLoad = () => {
      setLoaded(true);
    };
    const onError = () => {
      setLoaded(false);
    };

    loader.addEventListener("onload", onLoad);
    loader.addEventListener("onerror", onError);
    return () => {
      loader.removeEventListener("onload", onLoad);
      loader.removeEventListener("onerror", onError);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !container.current) return;

    new window.kakao.maps.Map(container.current, {
      center: new window.kakao.maps.LatLng(33.3617, 126.5292), //지도의 중심좌표.
      level: 9, //지도의 레벨(확대, 축소 정도)
    });
  }, [isLoaded, container.current]);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
};

export default KakaoMap;
