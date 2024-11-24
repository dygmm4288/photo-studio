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
    console.log("use effect", isLoaded, container.current);
    if (!isLoaded || !container.current) return;

    new window.kakao.maps.Map(container.current, {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    });
  }, [isLoaded, container.current]);

  return <div ref={container} style={{ width: 350, height: 350 }}></div>;
};

export default KakaoMap;
