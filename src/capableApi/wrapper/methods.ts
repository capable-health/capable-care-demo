import { isClassOverride, isSubclassOverride } from "./namespaces";
import { CLASS_OVERRIDES_MATCHES } from "./overrides";
import { injectLetterBefore } from "./utils";

const CANCEL = "cancel";
const CREATE = "create";
const UPDATE = "update";
const LIST = "list";
const GET = "get";
const DELETE = "delete";
const SMS_TOKEN = "smsToken";
const SMS_OWNER_TOKEN = "smsOwnerToken";
const CHAT_TOKEN = "chatToken";
const CHAT_OWNER_TOKEN = "chatOwnerToken";
const ME = "me";
const SUGGESTION = "suggestion";
const RESCHEDULE = "reschedule";
const SEARCH = "search";
const SELECT = "select";
const SECRET = "secret";
const LINK = "link";
const EXPORT = "export";
const INVITE = "invite";
const AVATAR_UPLOAD = "avatarUpload";
const ADD_CHAT_PARTICIPANT = "addChatParticipant";
const CREATE_GROUP_SMS = "createGroupSms";
const CREATE_GROUP_CHAT = "createGroupChat";
const CREATE_VIDEO_CALL = "privateRoom";
const ONBOARDING_LINK = "onboardingLink";
const CONFIRM = "confirm";

const ACTION_OVERRIDES = {
  [CREATE]: "Post",
  [UPDATE]: "IdPatch",
  [LIST]: "Get",
  [GET]: "IdGet",
  [DELETE]: "IdDelete",
  [SMS_TOKEN]: "TwilioSmsTokenGet",
  [SMS_OWNER_TOKEN]: "TwilioSmsOwnerTokenGet",
  [CHAT_TOKEN]: "TwilioChatTokenGet",
  [CHAT_OWNER_TOKEN]: "TwilioChatOwnerTokenGet",
  [ME]: "MeGet",
  [SUGGESTION]: "CareSuggestionsPost",
  [SEARCH]: "SearchGet",
  [SELECT]: "SelectGet",
  [LINK]: "LinkPost",
  [EXPORT]: "IdExportGet",
  [INVITE]: "InvitePost",
  [SECRET]: "IdSecretGet",
  [AVATAR_UPLOAD]: "IdAvatarPost",
  [ADD_CHAT_PARTICIPANT]: "AddChatParticipantPatch",
  [CREATE_GROUP_SMS]: "CreateGroupSmsPost",
  [CREATE_GROUP_CHAT]: "CreateGroupChatPost",
  [CREATE_VIDEO_CALL]: "PrivateRoomPost",
  [ONBOARDING_LINK]: "OnboardingGet",
  [CANCEL]: "IdCancelPost",
  [RESCHEDULE]: "IdReschedulePost",
  [CONFIRM]: "IdConfirmPost",
};
const METHOD_OVERRIDES = Object.keys(ACTION_OVERRIDES);
function isMethodOverride(method: string): boolean {
  return METHOD_OVERRIDES.includes(method);
}

function clientMethodFor(
  method: string,
  parentClassName: string,
  constructorName: string
): string {
  let clientMethod = method;

  if (isMethodOverride(method)) {
    let className: string;

    if (isClassOverride(constructorName)) {
      className = CLASS_OVERRIDES_MATCHES[constructorName];
    } else {
      if (isSubclassOverride(constructorName)) {
        className =
          parentClassName.charAt(0).toLowerCase() + parentClassName.slice(1);
      } else
        className =
          constructorName.charAt(0).toLowerCase() +
          constructorName.slice(1, -3);

      if (parentClassName.endsWith("Template")) {
        // template class have a second 's' midway
        className = injectLetterBefore(className, "Template", "s");
      } else if (parentClassName.endsWith("Type")) {
        // type class have a second 's' midway
        className = injectLetterBefore(className, "Type", "s");
      }
    }

    if (className.includes("integrations") && method === "update")
      // integrations are singleton, so instead of IdPatch, we use Patch
      clientMethod = className + "Patch";
    else clientMethod = className + ACTION_OVERRIDES[method];
  }

  return clientMethod;
}

export {
  clientMethodFor,
  isMethodOverride,
  ADD_CHAT_PARTICIPANT,
  AVATAR_UPLOAD,
  CANCEL,
  CHAT_OWNER_TOKEN,
  CHAT_TOKEN,
  CONFIRM,
  CREATE_GROUP_SMS,
  CREATE_GROUP_CHAT,
  CREATE_VIDEO_CALL,
  CREATE,
  DELETE,
  EXPORT,
  GET,
  INVITE,
  LINK,
  LIST,
  ME,
  ONBOARDING_LINK,
  RESCHEDULE,
  SEARCH,
  SECRET,
  SELECT,
  SMS_OWNER_TOKEN,
  SMS_TOKEN,
  SUGGESTION,
  UPDATE,
};
