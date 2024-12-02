const run = (list) => {
  if (!list) list = [];
  list.forEach((item) => item());
};

class Loader {
  static instance;
  script = null;
  callbacks = new Map();

  constructor() {
    if (!Loader.instance) Loader.instance = this;
    return Loader.instance;
  }

  setScript() {
    if (this.script) return;
    const apiKey = import.meta.env.VITE_KAKAO_KEY;
    const url = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer&autoload=false`;
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = url;
    script.defer = true;
    script.async = true;

    script.onload = this.onLoad.bind(this);
    script.onerror = this.onError.bind(this);

    document.head.appendChild(script);
    this.script = script;
  }

  onLoad() {
    if (!window.kakao)
      throw new Error("카카오 API가 성공적으로 로딩되지 않았습니다.");

    if (!window.kakao.maps.Map) {
      window.kakao.maps.load(() => {
        run(this.callbacks.get("onload"));
      });
    } else {
      run(this.callbacks.get("onload"));
    }
  }

  onError() {
    run(this.callbacks.get("onerror"));
  }

  execute() {
    this.setScript();
    return this;
  }

  addEventListener(type, listener) {
    if (!this.callbacks.has(type)) this.callbacks.set(type, []);
    const listeners = this.callbacks.get(type);
    this.callbacks.set(type, [...listeners, listener]);
  }

  removeEventListener(type, listener) {
    if (!this.callbacks.has(type)) return;

    const listeners = this.callbacks.get(type);

    this.callbacks.set(
      type,
      listeners.filter((item) => item !== listener),
    );
  }
}

export default Loader;
