const core = require('@actions/core');

async function run() {
  try {

    core.info("Hello world v1.0.0");

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
