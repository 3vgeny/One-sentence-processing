export interface SentenceProcessingResponse {
  list: SentenceProcessingResponseItem[];
}

export interface SentenceProcessingResponseItem {
  meanings: SentenceProcessingResponseMeaning[];
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
