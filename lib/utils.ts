import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const WHATSAPP_NUMBER = "919326077117";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in booking a tattoo consultation with Sumit Tank at Kaal Chakkra Tattoo Studio."
);

export function getWhatsAppLink(customMessage?: string) {
  const message = customMessage
    ? encodeURIComponent(customMessage)
    : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function getWhatsAppLinkForTattoo(tattooName: string) {
  const message = encodeURIComponent(
    `Hi, I saw the "${tattooName}" tattoo on your website and I'm interested in getting something similar. Can we discuss?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

export function extractYouTubeId(url: string): string | null {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

