npm i mongoose react-hook-form react-icons bcryptjs

// for secret key generate
openssl rand -base64 32
//GitHub Auth

```
goto github account => settings => Developer settings

OAuth Apps  - click
New OAuth App - click

Register a new OAuth application
Application name - authdemo-ezy
Homepage URL     - http://localhost:3000
Authorization callback URL - http://localhost:3000/api/auth/callback/github

Register Application - click

```

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
sign in with google account
=> Email Testing => Inboxes =>
Integrations - Nodemailer (select)
copy the code

```
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "39c182b85eeb81",
    pass: "70deba1f89a7d6"
  }
});


go to nodemailer.com
npm install nodemailer

```

// for learning
mmantratech.com
// Shadcn-ui
ui.aceternity.com
