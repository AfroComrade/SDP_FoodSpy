import firebase_admin
from firebase_admin import credentials, firestore

def firebaseInitialize():
    cred = credentials.Certificate("../firebase/private/foodspy-39b75-firebase-adminsdk-xjs48-8714375f78.json")
    firebase_admin.initialize_app(cred, {
        'databaseURL': "https://foodspy-39b75-default-rtdb.firebaseio.com/"
        })

# Fetch the service account key JSON file contents
def firebaseCommit(items):
    db = firestore.client()
    doc_ref = db.collection(u'items')
    for item in items:
        #print(item)
        doc_ref.document(item["product"]).set(item)