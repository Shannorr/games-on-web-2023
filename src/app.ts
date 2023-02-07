import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
import { Engine, Scene, ArcRotateCamera, Vector3, HemisphericLight, Mesh, MeshBuilder, FreeCamera, SceneLoader } from "@babylonjs/core";

class App {
  scene: Scene;
  engine: Engine;
  private _canvas: HTMLCanvasElement;

  constructor() {
    this._canvas = this._createCanvas();
    this.engine = new Engine(this._canvas, true);
    this.scene = this.CreateScene();
    this.CreateSimplePlane();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera("camera", new Vector3(0, 5, -5), this.scene);
    camera.attachControl();
    camera.speed = 0.5;

    const hemiLight = new HemisphericLight(
      "hemiLight",
      new Vector3(0, 1, 0),
      this.scene
    );

    hemiLight.intensity = 0.5;

    return scene;
  }

  private _createCanvas(): HTMLCanvasElement {
    //Commented out for development
    document.documentElement.style["overflow"] = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.width = "100%";
    document.documentElement.style.height = "100%";
    document.documentElement.style.margin = "0";
    document.documentElement.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    //create the canvas html element and attach it to the webpage
    this._canvas = document.createElement("canvas");
    this._canvas.style.width = "100%";
    this._canvas.style.height = "100%";
    this._canvas.id = "gameCanvas";
    document.body.appendChild(this._canvas);

    return this._canvas;
  }

  async CreateSimplePlane(): Promise<void> {
    const models = await SceneLoader.ImportMeshAsync(
      "",
      "./models/",
      "mapTestBlender.glb"
    );

    models.meshes[0].position = new Vector3(0, 0, 0);

    console.log("models", models);
  }
}

new App();