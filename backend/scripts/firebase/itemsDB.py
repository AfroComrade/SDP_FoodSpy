import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore
import csv
import time

import itemSorter

# Fetch the service account key JSON file contents
cred = credentials.Certificate("./private/foodspy-39b75-firebase-adminsdk-xjs48-8714375f78.json")
app = firebase_admin.initialize_app(cred, {
    'databaseURL': "https://foodspy-39b75-default-rtdb.firebaseio.com/"
})

db = firestore.client()
doc_ref = db.collection(u'items')

#itemfile = open('items.txt', 'w')


#csvreader = csv.reader('./SampleDataFeed.csv')
with open("./SampleDataFeed.csv") as file:
    csvreader = csv.reader(file)
    counter = 0
    for row in csvreader:
        productName = row[1]
        for i in range(0, len(productName) - 1, 1):
            if productName[i] == '/':
                productName = productName[:i]
                break

        counter += 1
        if (counter == 1):
            continue
        data = {
            u'product': productName,
            u'price': row[3],
            u'imageURL': row[5],
            u'location': "countdown"
        }
        doc_ref.document(productName).set(data)
        #itemfile.write(productName + '\n')
    #itemfile.close()

#itemSorter.sortProducts()

# connect to items firestore

# test function for getting and printing info in python
def getInfo():
    try:
        docs = doc_ref.get()
        for doc in docs:
            print(u'Doc data:{}'.format(doc.to_dict()))
    except google.cloud.exceptions.NotFound:
        print(u'Missing data')




# This creates a new collection called test (if it doesn't already exist)
#doc_ref2 = store.collection(u'test')
# This adds a document, in key/value pairs
#doc_ref2.add({u'name': u'jacob', u'developer': u'frontend'})