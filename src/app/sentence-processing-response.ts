export interface SentenceProcessingResponse {
  list: SentenceProcessingResponseItem[];
}

export interface SentenceProcessingResponseItem {
  meanings: SentenceProcessingResponseMeaning[];
  rules: SentenceProcessingResponseRules[];
  sentences: SentenceProcessingResponseSentenses[];
}

export interface SentenceProcessingResponseMeaning {
  actualKeyword: string;
  additionalMeaningObject: string;
  additionalMeaningSubject: string;
  additionalMeaningVerb: string;
  clauseId: number;
  decompositionIncorrect: boolean;
  edited: boolean;
  id: string;
  isRelevant: string;
  normalizeMeaningObject: string;
  normalizeMeaningSubject: string;
  normalizeMeaningVerb: string;
  order: number;
  profileId: string;
  profileType: string;
  profileUrl: string;
  realMeaningObject: string;
  realMeaningSubject: string;
  realMeaningVerb: string;
  role: string;
  searchKeyword: string;
  searchRequestId: string;
  section: string;
  simplifiedActualKeyword: string;
  structureType: string;
  subjectOrder: number;
  tag: string;
  text: string;
  whereFound: string;
}

export interface SentenceProcessingResponseRules {
  clauseId: number;
  meaningId: string;
  meaningsRulesIds: string[];
  rolesRolesIds: string[];
  searchRequestId: string;
}

export interface SentenceProcessingResponseSentenses {
  clauses: SentenceProcessingResponseSentensesClauses;
  companyName: string;
  order: number;
  personName: string;
  preprocessingInfo: SentenceProcessingResponseSentensesPreprocessingInfo;
  profileUrl: string;
  refId: string;
  refType: string;
  searchKeywords: string[];
  section: string;
  skwInfo: SentenceProcessingResponseSentensesSkwInfo[];
  spacyDoc: string;
  text: string;
}

export interface SentenceProcessingResponseSentensesClauses {
  0: SentenceProcessingResponseSentensesClauses0;
}

export interface SentenceProcessingResponseSentensesClauses0 {
  clauseRootId: number;
  clauseTokensIds: number[];
  components: SentenceProcessingResponseSentensesClauses0Components;
  compoundClauses: any;
  extraParts: SentenceProcessingResponseSentensesClauses0ExtraParts;
  headClauses: any;
  rolesDoc: SentenceProcessingResponseSentensesClauses0RolesDoc;
  subordinateClauses: any;
}

export interface SentenceProcessingResponseSentensesClauses0Components {
  aboutObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  acrossObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  byObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  dativeObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  directObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  forObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  fromObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  inObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  intoObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  ofObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  onObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  subjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  throughObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  toObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  undefined: any;
  verb: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  viaObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
  withObjects: SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects;
}

export interface SentenceProcessingResponseSentensesClauses0ComponentsCharacteristicObjects {
  component: SentenceProcessingResponseSentensesClauses0ComponentsComponent[];
  dep: string;
  generalizingWord: string;
  isNegation: boolean;
  isPassive: boolean;
  modality: string;
  preposition: string;
}
export interface SentenceProcessingResponseSentensesClauses0ComponentsComponent {
  coreWords: number[];
  coreWordsText: string;
  detailsWords: any;
  hasSkw: boolean;
  headId: number;
  words: number[];
  wordsText: string;
}

export interface SentenceProcessingResponseSentensesClauses0ExtraParts {
  dobj: SentenceProcessingResponseSentensesClauses0ExtraPartsDobjOrNsubjOrPrep;
  nsubj: SentenceProcessingResponseSentensesClauses0ExtraPartsDobjOrNsubjOrPrep;
  prep: SentenceProcessingResponseSentensesClauses0ExtraPartsDobjOrNsubjOrPrep;
}

export interface SentenceProcessingResponseSentensesClauses0ExtraPartsDobjOrNsubjOrPrep {
  headId: number;
  tokenIds: any;
}

export interface SentenceProcessingResponseSentensesClauses0RolesDoc {
  agents: string;
  beneficiary: string;
  method: string;
  result: string;
  theme: string;
  undefined: string;
  verb: string;
}

export interface SentenceProcessingResponseSentensesPreprocessingInfo {
  hyphen_tokens: any;
  links_match: any;
  ne_np: SentenceProcessingResponseSentensesPreprocessingInfoNe_np;
}
export interface SentenceProcessingResponseSentensesPreprocessingInfoNe_np {
  NE: any;
  NP: SentenceProcessingResponseSentensesPreprocessingInfoNe_npNP[];
}
export interface SentenceProcessingResponseSentensesPreprocessingInfoNe_npNP {
  dep: string;
  ent_type: string;
  indexes: number[];
  lemma: string;
  phrase: string;
  pos: string;
  root_index: number;
  tag: string;
  tokens_ids: number[];
}

export interface SentenceProcessingResponseSentensesSkwInfo {
  akw: string;
  clauseId: number;
  componentElemId: number;
  componentName: string;
  role: string;
  skw: string;
  skwIds: number[];
  undefinedId: number;
}
