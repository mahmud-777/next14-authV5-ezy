npm i mongoose react-hook-form react-icons bcryptjs

// for secret key generate
openssl rand -base64 32
// Google Auth

```
console.cloud.google.com
create new project name GoogleNextAuthExample
=> APIs & Services click
=> OAuth consent screen click
App name - NextAuthDemo-ezy
User support email - mah33k@gmail
Developer contact information -mah33k@gmail

SAVE AND CONTINUE

ADD OR REMOVE SCOPES  - Check 1st 3 checkbox the UPDATE

SAVE AND CONTINUE

Test users
+ ADD USERS  - mah33k@gmail => ADD
SAVE AND CONTINUE

BACK TO DASHBOARD

Credentials  - Click
+ CREATE CREDENTIALS => OAuth client ID click
Application Type - Web application -select

Authorized redirect URIs
+ ADD URI
URIs - http://localhost:3000/api/auth/callback/google

CREATE - Click

client ID - copy and past to .env file
client secret - copy and past to .env file

```

src/app/auth.js and Edit

```
import GoogleProvider from 'next-auth/providers/google


```

---

// for email testing
mailtrap.io
// for learning
mmantratech.com
// Shadcn-ui
ui.aceternity.com
