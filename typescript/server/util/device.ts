import parser from "ua-parser-js";

export enum DEVICE {
  WEB = "web",
  MOBILE = "mobile",
}

export function getDeviceFromUserAgent(userAgent: string): DEVICE {
  const uaParsed = parser(userAgent);
  if (uaParsed.device.type === "mobile") {
    return DEVICE.MOBILE;
  }
  return DEVICE.WEB;
}