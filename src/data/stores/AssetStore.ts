import { createStore } from "solid-js/store";

function useAssetStore() {
  const [status, setStatus] = createStore();
  const [list, setList] = createStore([]);
  const [progress, setProgress] = createStore({ completed: 0, total: 0 });

  function load(imgSrcs: string[]) {
    setStatus("loading");

    imgSrcs.map(function (src, index) {
      const img = new Image();

      img.onloadstart = function (e: Event) {
        console.log(`${src} Start - ${e}`);
      };

      img.onprogress = function (e: ProgressEvent<EventTarget>) {
        if (!e.lengthComputable) return;

        console.log(`${src} - Loaded: ${e.loaded}, Total: ${e.total}`);
      };

      img.src = src;
    });
  }

  return [{ status, list, progress }, { load }];
}

export default useAssetStore;
