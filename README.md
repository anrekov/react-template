# What is it?
It's a react template with TS and few libraries

# Rules

## 1. Conventional commit messages
You can check how it works [here](https://github.com/conventional-changelog/commitlint)

Start a message with **feat/fix/...**, you can also add the task number or some additional info in braces like **(task-117)**, then **:** and finally a message starting with a verb, such as **add/implement/adjust/...**

### Examples: 
- <b>chore: run tests on travis ci</b>
- <b>fix(server): send cors headers</b>
- <b>feat(blog): add comment section</b>
- <b>feat(fortech-69): implement footer</b>

## 2. Eslint / prettier + precommit hook
It will run on commit or you can use scripts:
- `yarn prettier`
- `yarn lint-fix` 

## 3. Tests
You can run them or see coverage (keep it over 80%) with scripts:
- `yarn test`
- `yarn coverage`