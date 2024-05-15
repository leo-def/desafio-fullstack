import { v4 as uuidv4 } from "uuid";
import { MessageVariantEnum } from "../_enums/messageVariant.enum";
import { MessageSeverityEnum } from "../_enums/messageSeverity.enum";

export interface Message {
  id?: string;
  variant?: MessageVariantEnum;
  severity?: MessageSeverityEnum;
  title?: string;
  body?: string;
  duration?: number;
}

export function buildMessage(message: string | Message): Message {
  message =
    typeof message === "string"
      ? ({ body: message, id: uuidv4() } as Message)
      : message;
  message.id = message.id ?? uuidv4();
  message.duration = message.duration ?? 3000;
  message.severity = message.severity ?? MessageSeverityEnum.INFO;
  message.variant = message.variant ?? MessageVariantEnum.STANDARD;
  return message;
}
