function syncGoogleSheets(documents) {
   var spreadsheetId = "";
   var valueInputOption = "";
   var range = "";
  
   Sheets.Spreadsheets.Values.clear({}, spreadsheetId, range)
  
   for (i = 0; i < documents.length; i++) {
     var valueRange = Sheets.newRowData();
    
     var fields = documents[i].fields;
     var values = [fields.feedback, fields.grade, fields.group, fields.member, fields.createdAt];
     
     valueRange.values = [values];
     
     var appendRequest = Sheets.newAppendCellsRequest();
     appendRequest.sheetId = spreadsheetId;
     appendRequest.rows = [valueRange];
     
     var result = Sheets.Spreadsheets.Values.append(valueRange, spreadsheetId, range, {
       valueInputOption: valueInputOption
     });
  }
}
