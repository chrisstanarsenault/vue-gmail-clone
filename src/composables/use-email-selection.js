import { reactive } from "vue";
import useUpdateEmail from "./use-updateEmail";

let emails = reactive(new Set());
export const useEmailSelection = function() {
  let toggle = function(email) {
    if (emails.has(email)) {
      emails.delete(email);
    } else {
      emails.add(email);
    }
  };
  let clear = () => {
    emails.clear();
  };
  let addMultiple = newEmails => {
    newEmails.forEach(email => {
      emails.add(email);
    });
  };
  let markRead = () => {
    emails.forEach(email => {
      email.read = true;
      useUpdateEmail(email);
    });
  };
  let markUnread = () => {
    emails.forEach(email => {
      email.read = false;
      useUpdateEmail(email);
    });
  };
  let archive = () => {
    emails.forEach(email => {
      email.archived = true;
      useUpdateEmail(email);
      clear();
    });
  };
  return {
    emails,
    toggle,
    clear,
    addMultiple,
    markRead,
    markUnread,
    archive
  };
};

export default useEmailSelection;
