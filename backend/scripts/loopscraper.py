import time
import requests

import numpy as np
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json


#URL = "https://www.tripadvisor.com/Airline_Review-d8729157-Reviews-Spirit-Airlines#REVIEWS"
URL = "https://www.paknsave.co.nz/shop/Search?q=baked%20beans"
URLs = "https://www.newworld.co.nz/shop/Search?q=chocolate"
URL2 = "https://www.paknsave.co.nz/shop/Search?q=chocolate"
U1 = "https://www.newworld.co.nz/shop/Search?q=potato%20chips"
U4 = "https://epsom.store.freshchoice.co.nz/search?utf8=%E2%9C%93&q=ham"

NW = 'newworld'
PK = 'paknsave'
Chocolate = 'chocolate'


# https://medium.com/ymedialabs-innovation/web-scraping-using-beautiful-soup-and-selenium-for-dynamic-page-2f8ad15efe25



print("----------------")
#
print("----------------")
print("Start pak n save 2")
print("----------------")
#testU(URL)
print("----------------")
print("Start new world")


noodles='noodles'
URL = ConcatURL(noodles)
Pages = categoryCount(PK,noodles,URL)
RunScraper(URL,Pages,noodles)


print("----------------")
print("Start Fresh Choice")
#RunScraper(U4)
print("----------------")


##Functions
PK = "https://www.paknsave.co.nz/shop/Search?q="
NW = "https://www.newworld.co.nz/shop/Search?q="
PGG = "&pg="
NEWWORLD = "newworld"
PAKNSAVE = "paknsave"


def ConcatURL(Category):
    print('Start concat')
    print('------------------------')
    PGG = "&pg="
    PK = "https://www.paknsave.co.nz/shop/Search?q="
    URl = PK + Category
    print('End concat')
    print('------------------------')
    return URl
    
    


def categoryCount(Store,Category,urls):
    print('Start Count')
    print('------------------------')
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    print("2")
    driver.get(urls)
    PG = requests.get(urls)
    page_source = driver.page_source
    print("3")
    print("Selenium done?")
    soup = BeautifulSoup(page_source, 'lxml')
    items = []  
    ITM = soup.find_all('li','fs-pagination__item')
    
    for I in  ITM:
        GA = I.find('a') 
        GAtext = GA.get_text().strip()
        if len(GAtext) <= 2 and len(GAtext) > 0:
            print('A: ',GAtext)
            items.append(int(GAtext))
    
    #print("Max val: ")
    #print(np.max(items))
    print('End Count')
    print('------------------------')
    return np.max(items)
    



def RunScraper(URL, V,categories):
    for I in range(1,V+1):
        print('PAGE: ',I)
        URL = NextPage(categories,I)
        Start(URL)

def Start(urls):
    print(urls)
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    driver.get(urls)
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, 'lxml')
    items = []
    items_selector = soup.find_all('div', class_='fs-product-card')
    for item_selector in items_selector:
        item_dollar = item_selector.find('span', class_='fs-price-lockup__dollars')
        item_dollar_price = item_dollar.get_text()
        item_cents = item_selector.find('span', class_='fs-price-lockup__cents')
        item_cent_price = item_cents.get_text()
        item_name = item_selector.find('a')
        print(item_name['aria-label'])
        printstring = "item price: $" + str(item_dollar_price) + "." + str(item_cent_price)
        print(printstring)
        items.append(item_dollar_price)
        





