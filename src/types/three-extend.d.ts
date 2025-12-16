declare module "three/examples/jsm/loaders/OBJLoader" {
  import { Loader, LoadingManager } from "three";
  export class OBJLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (object: unknown) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    parse(data: string): unknown;
  }
}

