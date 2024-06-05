import { Request } from "express";
import parser from "ua-parser-js";

export enum DEVICE {
  DESKTOP = "desktop",
  MOBILE = "mobile",
}

export function getDeviceFromUserAgent(request: any): DEVICE {
  const uaParsed = parser(request.headers["user-agent"]);
  if (uaParsed.device.type === "mobile") {
    return DEVICE.MOBILE;
  }
  return DEVICE.DESKTOP;
}