import { Request } from './request';

export const formRequest: Request = {
  profileType: '',
  section: '',
  description: '',
  keyWord: '',
  name: '',
};

export const mockResponseJson = `{
  "list": [
      {
          "meanings": [
            {
              "actualKeyword": "social media service",
              "additionalMeaningObject": null,
              "additionalMeaningSubject": null,
              "additionalMeaningVerb": null,
              "clauseId": 0,
              "decompositionIncorrect": false,
              "edited": false,
              "id": null,
              "isRelevant": null,
              "normalizeMeaningObject": "#SOCIAL_MEDIA",
              "normalizeMeaningSubject": "#COMPANY",
              "normalizeMeaningVerb": "#DOES",
              "order": 0,
              "profileId": "0",
              "profileType": "company",
              "profileUrl": "some url",
              "realMeaningObject": "social media service",
              "realMeaningSubject": "Our company",
              "realMeaningVerb": "do",
              "role": "theme",
              "searchKeyword": "social media",
              "searchRequestId": "0",
              "section": "description",
              "simplifiedActualKeyword": null,
              "structureType": null,
              "subjectOrder": 0,
              "tag": "",
              "text": "Our company does social media services.",
              "whereFound": "OBJECT"
          }
          ],
          "rules": [
              {
                  "clauseId": 0,
                  "meaningId": "",
                  "meaningsRulesIds": [
                      "6TXVKIoBlx_GmFIOSspb"
                  ],
                  "rolesRolesIds": [
                      "wDXVKIoBlx_GmFIOScr-"
                  ],
                  "searchRequestId": "0"
              }
          ],
          "sentences": [
              {
                  "clauses": {
                      "0": {
                          "clauseRootId": 2,
                          "clauseTokensIds": [
                              0,
                              1,
                              2,
                              3,
                              4,
                              5,
                              6
                          ],
                          "components": {
                              "aboutObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "acrossObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "byObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "dativeObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "directObjects": {
                                  "component": [
                                      {
                                          "coreWords": [
                                              3,
                                              4,
                                              5
                                          ],
                                          "coreWordsText": "social media services",
                                          "detailsWords": [],
                                          "hasSkw": true,
                                          "headId": 5,
                                          "words": [
                                              3,
                                              4,
                                              5
                                          ],
                                          "wordsText": "social media services"
                                      }
                                  ],
                                  "dep": "dobj",
                                  "generalizingWord": "social media service",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "forObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "fromObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "inObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "intoObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "ofObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "onObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "subjects": {
                                  "component": [
                                      {
                                          "coreWords": [
                                              0,
                                              1
                                          ],
                                          "coreWordsText": "Our company",
                                          "detailsWords": [],
                                          "hasSkw": false,
                                          "headId": 1,
                                          "words": [
                                              0,
                                              1
                                          ],
                                          "wordsText": "Our company"
                                      }
                                  ],
                                  "dep": "nsubj",
                                  "generalizingWord": "our company",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "throughObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "toObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "undefined": [],
                              "verb": {
                                  "component": [
                                      {
                                          "coreWords": [
                                              2
                                          ],
                                          "coreWordsText": "does",
                                          "detailsWords": [],
                                          "hasSkw": false,
                                          "headId": 2,
                                          "words": [
                                              2
                                          ],
                                          "wordsText": "does"
                                      }
                                  ],
                                  "dep": "verb",
                                  "generalizingWord": "do",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "viaObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              },
                              "withObjects": {
                                  "component": [],
                                  "dep": "",
                                  "generalizingWord": "",
                                  "isNegation": false,
                                  "isPassive": false,
                                  "modality": "",
                                  "preposition": ""
                              }
                          },
                          "compoundClauses": [],
                          "extraParts": {
                              "dobj": {
                                  "headId": -1,
                                  "tokenIds": []
                              },
                              "nsubj": {
                                  "headId": -1,
                                  "tokenIds": []
                              },
                              "prep": {
                                  "headId": -1,
                                  "tokenIds": []
                              }
                          },
                          "headClauses": [],
                          "rolesDoc": {
                              "agents": "subjects",
                              "beneficiary": "",
                              "method": "",
                              "result": "",
                              "theme": "directObjects",
                              "undefined": "undefined",
                              "verb": "verb"
                          },
                          "subordinateClauses": []
                      }
                  },
                  "companyName": "some name",
                  "order": 0,
                  "personName": "",
                  "preprocessingInfo": {
                      "hyphen_tokens": [],
                      "links_match": [],
                      "ne_np": {
                          "NE": [],
                          "NP": [
                              {
                                  "dep": "nsubj",
                                  "ent_type": "",
                                  "indexes": [
                                      0,
                                      2
                                  ],
                                  "lemma": "company",
                                  "phrase": "Our company",
                                  "pos": "NOUN",
                                  "root_index": 1,
                                  "tag": "NN",
                                  "tokens_ids": [
                                      0,
                                      1
                                  ]
                              },
                              {
                                  "dep": "dobj",
                                  "ent_type": "",
                                  "indexes": [
                                      3,
                                      6
                                  ],
                                  "lemma": "service",
                                  "phrase": "social media services",
                                  "pos": "NOUN",
                                  "root_index": 5,
                                  "tag": "NNS",
                                  "tokens_ids": [
                                      3,
                                      4,
                                      5
                                  ]
                              }
                          ]
                      }
                  },
                  "profileUrl": "some url",
                  "refId": "0",
                  "refType": "company",
                  "searchKeywords": [
                      "social media"
                  ],
                  "section": "description",
                  "skwInfo": [
                      {
                          "akw": "social media services",
                          "clauseId": 0,
                          "componentElemId": 0,
                          "componentName": "directObjects",
                          "role": "theme",
                          "skw": "social media",
                          "skwIds": [
                              3,
                              4
                          ],
                          "undefinedId": -1
                      }
                  ],
                  "spacyDoc": "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",
                  "text": "Our company does social media services."
              }
          ]
      }
  ]
}`;
