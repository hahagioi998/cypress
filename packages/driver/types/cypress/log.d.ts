// The type declarations for Cypress Logs & the corresponding configuration permutations
declare namespace Cypress {
  interface Cypress {
    log(options: Partial<Cypress.LogConfig | InternalLogConfig>): Log | InternalLog | undefined
  }

  interface InternalLog extends Cypress.Log {
    groupEnd(): void
  }

  interface InternalLogConfig {
    // defaults to command
    instrument?: 'agent' | 'command' | 'route'
    // name of the log
    name?: string
    // the name override for display purposes only
    displayName?: string
    // additional information to include in the log if not overridden
    // the render props message
    // defaults to command arguments for command instrument
    message?: string | Array<string> | any[]
    // whether or not the xhr route had a corresponding response stubbed out
    isStubbed?: boolean
    alias?: string
    aliasType?: 'agent' | 'route' | 'primitive' | 'dom' | undefined
    commandName?: string
    // the JQuery element for the command. This will highlight the command
    // in the main window when debugging
    $el?: JQuery
    // whether or not to show the log in the Reporter UI or only
    // store the log details on the command and log manager
    emitOnly?: boolean
    // whether or not to start a new log group
    groupStart?: boolean
    //     // the type of log
    //     //   system - log generated by Cypress
    //     //   parent - log generated by Command
    //     //   child  - log generated by Chained Command
    type?: 'system' | 'parent' | 'child' | ((current: Cypress.State['state']['current'], subject: Cypress.State['state']['subject']) => 'parent' | 'child')
    // whether or not the generated log was an event or command
    event?: boolean
    method?: string
    url?: string
    status?: number
    // the number of xhr responses that occurred. This is only applicable to
    // logs defined with instrument=route
    numResponses?: number
    response?: string | object
    // provide the content to display in the dev tool's console when a log is 
    // clicked from the Reporter's Command Log
    consoleProps?: () => ObjectLike
    renderProps?: () => {
      indicator?: 'aborted' | 'pending' | 'successful' | 'bad'
      message?: string
    }
    browserPreRequest?: any
    // timeout of the group command - defaults to defaultCommandTimeout
    timeout?: number
  }
}
