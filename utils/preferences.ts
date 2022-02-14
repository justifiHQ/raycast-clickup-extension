import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  token: string;
  teamId: string;
  spaceId: string;
  defaultListId: string;
}

const preferences: Preferences = getPreferenceValues();

export default preferences;
