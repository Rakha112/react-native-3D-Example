import assert from 'assert';
import {decode} from 'base64-arraybuffer';
import {resolveAsync} from 'expo-asset-utils';
import * as FileSystem from 'expo-file-system';
import {suspend} from 'suspend-react';
import THREE from 'three';
import {GLTF, GLTFLoader} from 'three-stdlib';

async function loadFileAsync({
  asset,
  funcName,
}: {
  asset: unknown;
  funcName: string;
}) {
  if (!asset) {
    throw new Error(`ExpoTHREE.${funcName}: Cannot parse a null asset`);
  }
  return (await resolveAsync(asset)).localUri ?? null;
}

type ObjectGraph = {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
};

// Collects nodes and materials from a THREE.Object3D
export function buildGraph(object: THREE.Object3D) {
  const data: ObjectGraph = {nodes: {}, materials: {}};
  if (object) {
    object.traverse((obj: any) => {
      if (obj.name) {
        data.nodes[obj.name] = obj;
      }
      if (obj.material && !data.materials[obj.material.name]) {
        data.materials[obj.material.name] = obj.material;
      }
    });
  }
  return data;
}
async function loadGLTFAsync({
  asset,
}: {
  asset: unknown;
}): Promise<GLTF & ObjectGraph> {
  const uri = await loadFileAsync({
    asset,
    funcName: 'loadGLTFAsync',
  });

  assert(uri, 'loadGLTFAsync uri should exist');

  const base64 = await FileSystem.readAsStringAsync(uri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const arrayBuffer = decode(base64);
  const loader = new GLTFLoader();

  const res = await loader.parseAsync(arrayBuffer, 'beb');

  if (res.scene) {
    Object.assign(res, buildGraph(res.scene));
  }

  return res as GLTF & ObjectGraph;
}

export const useGLTFCustom = (asset: unknown) =>
  suspend(async () => loadGLTFAsync({asset}), ['useGLTFCustom', asset]);
