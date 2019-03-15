import {createSpecBuilderClass} from './helpers';

export const IssueBuilder = createSpecBuilderClass('IssueBuilder', {
  __typename: {default: 'Issue'},
  title: {default: 'Something is wrong'},
  number: {default: 123},
});

export function issueBuilder(...nodes) {
  return new IssueBuilder(nodes);
}