import { Request } from "express";
import parser from "ua-parser-js";

export enum DEVICE {
  DESKTOP = "desktop",
  MOBILE = "mobile",
  ANDROID = "android",
  IPHONE = "iphone",
}

export function getDeviceFromUserAgent(request: any): DEVICE {
  const uaParsed = parser(request.headers["user-agent"]);
  if (uaParsed.device.type === "mobile") {
    if (uaParsed.os.name === "iOS") {
      return DEVICE.IPHONE;
    } else if (uaParsed.os.name === "Android") {
      return DEVICE.ANDROID;
    }
    return DEVICE.MOBILE;
  }
  return DEVICE.DESKTOP;
}