import parser from "ua-parser-js";

export enum DEVICE {
  WEB = "web",
  MOBILE = "mobile",
  ANDROID = "android",
  IPHONE = "iphone",
}

export function getDeviceFromUserAgent(userAgent: string): DEVICE {
  const uaParsed = parser(userAgent);
  if (uaParsed.device.type === "mobile") {
    if (uaParsed.os.name === "iOS") {
      return DEVICE.IPHONE;
    } else if (uaParsed.os.name === "Android") {
      return DEVICE.ANDROID;
    }
    return DEVICE.MOBILE;
  }
  return DEVICE.WEB;
}