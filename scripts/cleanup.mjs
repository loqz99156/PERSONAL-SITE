#!/usr/bin/env node

import { spawn } from 'node:child_process';

const steps = [
  {
    name: 'Knip unused-code check',
    command: 'npx',
    args: ['knip', '--strict'],
    required: true,
  },
  {
    name: 'TypeScript lint',
    command: 'npm',
    args: ['run', 'lint', '--', '--max-warnings=0'],
    required: true,
  },
  {
    name: 'Optional depcheck',
    command: 'npx',
    args: ['depcheck'],
    required: false,
  },
];

const isCI = process.env.CI === 'true';

const runStep = (step) =>
  new Promise((resolve, reject) => {
    console.log(`\n→ ${step.name}`);
    const child = spawn(step.command, step.args, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✓ ${step.name} finished`);
        resolve();
      } else if (!step.required) {
        console.warn(`⚠ ${step.name} exited with code ${code}. Skipping (optional step).`);
        resolve();
      } else {
        reject(new Error(`${step.name} failed with code ${code}`));
      }
    });
  });

const main = async () => {
  const tasks = isCI ? steps : steps;

  for (const step of tasks) {
    await runStep(step);
  }

  console.log('\nAll cleanup checks complete.');
};

main().catch((err) => {
  console.error(`\nCleanup workflow stopped: ${err.message}`);
  process.exit(1);
});