/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ruleStatus } from '../../utils/constants';

export interface RuleEditorFormModel {
  id: string;
  log_source: string;
  logType: string;
  name: string;
  description: string;
  status: string;
  author: string;
  references: string[];
  tags: string[];
  detection: string;
  level: string;
  falsePositives: string[];
}

export const ruleEditorStateDefaultValue: RuleEditorFormModel = {
  id: '25b9c01c-350d-4b95-bed1-836d04a4f324',
  log_source: '',
  logType: '',
  name: '',
  description: '',
  status: ruleStatus[0],
  author: '',
  references: [],
  tags: [],
  detection: '',
  level: '',
  falsePositives: [],
};
