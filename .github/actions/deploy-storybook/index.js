const core = require('@actions/core');
const github = require('@actions/github');

const DEPLOY_STORYBOOK_LABEL = 'deploy-storybook';

try {

  const pullRequest = github.context.payload.pull_request;
  if(o)
  console.log(github.context.payload.pull_request);
} catch (error) {
  core.setFailed(error.message);
}