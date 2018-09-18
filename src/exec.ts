import cp from 'child_process';
import { takeRight } from 'lodash';
import { Task } from './Task';
import _ from 'lodash';

export const exec = (initOptions?: IExecInitOptions) => {
  initOptions = initOptions || {
    logger: {
      info: console.info,
      error: console.error
    }
  };

  return (
    commandParts: string[],
    options: IExecOptions = {}
  ): Promise<string> => {
    let command = commandParts.join(' ');

    initOptions.logger.info(`Execute "${command}" "${options.workingDir}"`);

    const childProcess = cp.spawn(
      commandParts[0],
      takeRight(commandParts, commandParts.length - 1),
      {
        cwd: options.workingDir,
        env: process.env,
        shell: true,
        stdio: ['inherit', 'pipe', 'pipe']
      }
    );

    let outputMessage = '';
    let errorMessage = '';
    return new Promise<string>((resolve, reject) => {
      let task = new Task(childProcess, options.timeout, initOptions.logger);

      task.on('outputChanged', output => {
        outputMessage += output.message;
        if (output.source == 'stderr') {
          errorMessage += output.message;
        }
      });

      task.on('completed', info => {
        if (info.code == 0) {
          initOptions.logger.info(`Pass: ${command}\n ${outputMessage}`);
          resolve(outputMessage);
        } else {
          initOptions.logger.error(
            `Error: ${command}\n${errorMessage}\n ${outputMessage}`
          );
          reject(errorMessage);
        }
      });
    });
  };
};

export interface IExecInitOptions {
  logger: {
    info: (message: string) => void;
    error: (message: string) => void;
  };
}

export interface IExecOptions {
  workingDir?: string;
  timeout?: number;
}
