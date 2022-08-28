function doGet() {
  // https://developers.google.com/apps-script/guides/html/templates
  return HtmlService
      .createTemplateFromFile('Index')
      .evaluate();
  }

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1KmTIM9j1vLL7vDUVUUmv0kXx7q7cH6E1s4mFoyrTP1Y/edit#gid=0";
const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
const worksheet = spreadsheet.getSheetByName("Sheet1");

function userClicked(username, user_input){
  worksheet.appendRow([new Date(), username, user_input]);
}

function getMessage(){
  //get all messages from spreadsheet
  const allMessages = worksheet.getRange("C:C").getValues();

  //remove column heading from allMessages
  allMessages.shift();

  // return an array of with no empty messages
  return allMessages.filter(function(el){
    return el!="";
  });
}
userClicked("jonathan","paris")
Logger.log(getMessage());