const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1KmTIM9j1vLL7vDUVUUmv0kXx7q7cH6E1s4mFoyrTP1Y/edit#gid=0";
const spreadsheet = SpreadsheetApp.openByUrl(SPREADSHEET_URL);
const worksheet = spreadsheet.getSheetByName("Sheet1");

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

function addNewRowToSheet(username, user_input) {
  worksheet.appendRow([new Date().toString(), username, user_input]);
  //date must be in string format so that it can be passed to client
  //https://developers.google.com/apps-script/guides/html/reference/run#myFunction(...)
}

function getSpreadsheetData() {
  //get all messages from spreadsheet
  const AllData = worksheet.getRange("A:C").getValues();

  //remove column heading
  AllData.shift();

  // remove empty arrays from AllData and return result
  return AllData.filter(function (el) {
    return el[0] != "";
  });
}
