# Tabs Genie

![Safeimagekit-resized-img](https://user-images.githubusercontent.com/12537806/221697081-ea8d0d9f-d8df-402b-93c2-53eb86fd7f38.png)

## Overview

It sorts your chrome tabs at the frequency you want, automatically. 

## How It Works

Basically there is a background script and a chrome extension popup script that talk to each other. 

The popup script will send the user configuration to the background script upon form changes. 

The background script with receive messages to change the sorting frequency or other settings and send back a response. 

The app sorts with a default frequency using the Chrome Tabs API. 


## Development

Contributations are encouraged. 

Before creating a contribution please review the dev standards/procedures section

### Dev Standards/Procedures

#### Procedures

Just create a branch off of main, make your changes, and open a pull request to the main branch for review. 

Upon successful review the changes will be merged in. 

Changes will not be auto published. You will have to coordinate with a code owner. 

#### Standards

- At a minimum, code must be tested  manually with a loom video/similar video showing the working functionality. This must be approved by the code owner or moderator. 
- All new code must be approved via a pull request to main from a feature branch. 
- If unit testing is enabled, unit testing your functionality will be required for added functions to ensure code quality. Screenshots/recordings of passing tests or validation of working tests will be required. 
- Variable/function names must be descriptive with their purpose in mind
- Long code blocks should be broken down into smaller testable, reusable, and readble functions. Code blocks for any function or snippet should not span more than a page of logic on a laptop screen. 
- Functions should have docstrings explaining the parameters, return values, and description of the function
- Code should be formatted to be readable using IDE formatting tools
### 
