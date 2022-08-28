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

function addNewRow(username, user_input) {
  worksheet.appendRow([new Date(), username, user_input]);
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
// addNewRow("jonathan","paris")
// Logger.log(getMessage());