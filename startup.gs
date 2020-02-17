function main() {
  var f = getFirebaseConfig();
  var app = FirestoreApp.getFirestore(f.client_email, f.private_key, f.project_id);
  var documents = app.getDocuments("feedbacks");
  syncGoogleSheets(documents);
}