import cp from 'child_process';
import { ITask } from './IOptions';
import { Task } from './Task';

export const run = (initOptions?: IRunInitOptions) => {
  initOptions = initOptions || {
    logger: {
      info: console.info
    }
  };
  return (commandParts: string[], options: IRunOptions = {}): ITask => {
    initOptions.logger.info(
      `Execute ${commandParts.join(' ')} ${options.workingDir}`
    );

    const childProcess = cp.exec(commandParts.join(' '), {
      cwd: options.workingDir
    });

    // const childProcess = cp.spawn(
    //     commandParts[0],
    //     _.takeRight(commandParts, commandParts.length - 1),
    //     {
    //         cwd: workingDir,
    //         env: process.env,
    //         shell: true
    //     }
    // );

    return new Task(childProcess, options.timeout, initOptions.logger);
  };
};

export interface IRunInitOptions {
  logger: {
    info: (message: string) => void;
  };
}

export interface IRunOptions {
  workingDir?: string;
  timeout?: number;
}
