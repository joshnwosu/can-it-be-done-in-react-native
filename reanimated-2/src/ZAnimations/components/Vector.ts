import { Matrix4, matrixVecMul4, Vector } from "react-native-redash";

export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export const project = (p: Vector3, canvas: Vector3, m: Matrix4): Vector3 => {
  "worklet";
  const pr = matrixVecMul4(m, [p.x, p.y, p.z, 1]);
  return {
    x: ((pr[0] / pr[3]) * canvas.x) / 2,
    y: ((pr[1] / pr[3]) * canvas.y) / 2,
    z: ((pr[2] / pr[3]) * canvas.z) / 2,
  };
};

export const rotateZ = (v: Vector3, a: number): Vector3 => {
  "worklet";
  return {
    x: v.x * Math.cos(a) - v.y * Math.sin(a),
    y: v.x * Math.sin(a) + v.y * Math.cos(a),
    z: v.z,
  };
};

export const dist = (v: Vector3) => {
  "worklet";
  return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
};

export const dist2d = (v: Vector) => {
  "worklet";
  return Math.sqrt(v.x ** 2 + v.y ** 2);
};
