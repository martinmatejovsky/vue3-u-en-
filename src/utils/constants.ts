export const colorsLightsOut: { value: string; text: string }[] = [
  { value: "#FFA500", text: "Orange" },
  { value: "#FFFF00", text: "Yellow" },
  { value: "#008000", text: "Green" },
  { value: "#0000FF", text: "Blue" },
  { value: "#800080", text: "Purple" },
];

export enum gameStates {
  new,
  inProgress,
  won,
  lost,
}