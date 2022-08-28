# 💬 1bxoxb1
![](assets/img/1bxoxb1.png)

1bxoxb1 is a no-login real-time online chat app using Google Sheets as backend.

This project is a proof of concept for using Google Sheets as a server. 

![GIF showing messaging app](assets/img/website.gif)

[▶ Live Preview]()

# 🚀Features
- Free.
- No login.
- Each user is assigned a random name.
- Does not collect personal data or cookies.
- Responsive UI for all screen sizes.
- Chat features : emoji, paragraphing, ...


# 🦴How it works
> Front-end : HTML, CSS, JS

> Back-end : Google Sheets, AppScript

- A spreadsheet on my Google Sheet account stores all required information (date, username, message).
![image of spreadsheet](assets/img/spreadsheet.png)

- Every 2 seconds browser sends read request is sent to this sheet.

- Server returns the spreadsheet data as an array to browser.

- New messages since last request are added to HTML.


# ✋Limitations
- A maximum of 30 concurrent users.
- Google Sheet API allows at most 300 requests per minute.

# 🔨 How to create your own chat app 
- First you need a Google account.
- Create a spreadsheet on GoogleSheets. The name of the file is not important.
- Add the following header to your `Sheet1`.
![image of spreadsheet](assets/img/spreadsheet.png)
- All messages will be saved in `Sheet1`.

## Create an appscript project
- Go to https://script.google.com/home then create a new appscript project. The project name is not important. 

- In your appscript project, manally create the following files.
![Image of file structure in AppScript](assets/img/files.png)

- Fill these files with the content found in the `appscript` folder in my github repo.

- In `Code.gs` file, set `SPREADSHEET_URL` to the URL of your spreadsheet.

## Deploy project

- Click `Deploy` > `New Deployment`.
- Configure the settings as you want then deploy.


# 📌 Attributions
Resource | Source
---|---
[avatar in project image](assets/img/1bxoxb1.png) | [janet mac](https://janet-mac.com/google-avatar-project)

# 🔨 To-Do
- [ ] Implemenet exponential backoff algorithm.
- [ ] Embed app as iframe on another website.
- [ ] Add sitemap + request indexing.

### ✔ Done
- [x] Make website responsive.
- [x] Add project social media preview.
