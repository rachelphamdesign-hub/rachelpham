/**
 * Local SVGs for TrackGuard case study (`public/media/icon/trackguard`).
 * Paths are URL-encoded for spaces and `?` in folder names.
 */
const problem = "/media/icon/trackguard/What%20is%20the%20Problem%3F";
const factors = "/media/icon/trackguard/Factors";
const survey = "/media/icon/trackguard/Survey";
const howItWorks = "/media/icon/trackguard/How%20TrackGuard%20Works%3F";
const designOutcome = "/media/icon/trackguard/Design%20Outcome";

export const trackguardIcon = {
  /** Who does it affect — group / “everyone” */
  everyone: `${problem}/EVERYONE.svg`,
  /** Key challenges L→R: Rising theft, Limited access, Delayed recovery, Lack of awareness */
  challengeRising: `${problem}/Icon.svg`,
  challengeLimited: `${problem}/Icon-1.svg`,
  challengeDelayed: `${problem}/Icon-2.svg`,
  challengeAwareness: `${problem}/Icon-3.svg`,
  /** Factors grid: Emotional, Logistical, Community, Insurance */
  factorEmotional: `${factors}/Container.svg`,
  factorLogistical: `${factors}/Container-1.svg`,
  /** `Container-2.svg` = trend line; `Container-3.svg` = shield — match titles */
  factorCommunity: `${factors}/Container-3.svg`,
  factorInsurance: `${factors}/Container-2.svg`,
  /** Survey insight cards + row icons */
  surveyConcerns: `${survey}/Container.svg`,
  surveyPrevention: `${survey}/Container-1.svg`,
  surveyAlarm: `${survey}/Container-2.svg`,
  surveyGps: `${survey}/Container-3.svg`,
  surveyLock: `${survey}/Container-4.svg`,
  surveyFeature: `${survey}/Container-5.svg`,
  /** How it works — three cards */
  howSmartAlerts: `${howItWorks}/Icon.svg`,
  howAutoDefense: `${howItWorks}/Container.svg`,
  howPrevention: `${howItWorks}/Container-1.svg`,
  /** Design outcome headers */
  designTakeaways: `${designOutcome}/Icon.svg`,
  designNextSteps: `${designOutcome}/Container.svg`,
} as const;
