import time

from numpy import true_divide

import CountdownScraper
import ScraperCommit
from selenium import webdriver
from selenium.webdriver.common.by import By
import random

#storeId=b2e98a14-c8ca-401e-99ed-edf74570c6f6&clickSource=list
#storeId=e1925ea7-01bc-4358-ae7c-c6502da5ab12&clickSource=list

PNSapiURL = "https://www.paknsave.co.nz/CommonApi/Store/ChangeStore?storeId="
NWapiURL = "https://www.newworld.co.nz/CommonApi/Store/ChangeStore?storeId="

urlstoreID1 = "https://www.paknsave.co.nz/CommonApi/Store/ChangeStore?storeId=b2e98a14-c8ca-401e-99ed-edf74570c6f6&clickSource=list"
urlPage = "https://www.paknsave.co.nz/shop/category/fresh-foods-and-bakery"
urlstoreID2 = "https://www.paknsave.co.nz/CommonApi/Store/ChangeStore?storeId=e1925ea7-01bc-4358-ae7c-c6502da5ab12&clickSource=list"

def main():
    ScraperCommit.firebaseInitialize()
    #PSIterateThroughShops()
    NWIterateThroughShops()
    #CountdownScraper.getPickle(urlPage)

#class="fs-selected-store__method-btn fs-selected-store__update-btn "
def randSleep():
    time.sleep(4 + random.randint(2, 4))

def LoopThroughCategories(incomingUrl, storeID):
    counter = 1
    check = True
    while(check):
        storeURL = NWapiURL + storeID
        print(storeURL)
        driver = CountdownScraper.initializeDriver(storeURL)
        randSleep()
        #Handle getting the link to the next page
        url = incomingUrl
        if (counter > 1):
            url += "?pg=" + str(counter)
        driver.get(url)
        randSleep()
        
        #get the items
        pageInfo = driver.page_source
        print(url)
        items = CountdownScraper.NWscrapeForItems(pageInfo)
        for item in items:
            print(item)
        print("committing " + url)
        CountdownScraper.commitItems(items)
        
        check = CountdownScraper.getNextPage2(pageInfo)
        driver.quit()
        counter += 1

def IterateThroughCategories(storeID, filename):
    file = open(filename, 'r')
    paknsaveURLS = file.readlines()
    file.close()
    for line in paknsaveURLS:
        print(line)
        LoopThroughCategories(line[:len(line)-1], storeID)

def PSIterateThroughShops():
    file = open('./StoreID.txt')
    storeIDs = file.readlines()
    file.close()
    for storeID in storeIDs:
        IterateThroughCategories(storeID, "./paknsave.txt")


def NWIterateThroughShops():
    file = open('./NWStoreIDs.txt')
    storeIDs = file.readlines()
    file.close()
    for storeID in storeIDs:
        IterateThroughCategories(storeID, "./newworld.txt")


main()