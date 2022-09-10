##imports
import time
import requests

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import json



##Main
#URL = "https://www.tripadvisor.com/Airline_Review-d8729157-Reviews-Spirit-Airlines#REVIEWS"
URL = "https://www.paknsave.co.nz/shop/Search?q=baked%20beans"
URL2 = "https://www.paknsave.co.nz/shop/Search?q=chocolate"
U1 = "https://www.newworld.co.nz/shop/Search?q=potato%20chips"


# https://medium.com/ymedialabs-innovation/web-scraping-using-beautiful-soup-and-selenium-for-dynamic-page-2f8ad15efe25
print("----------------")
#RunScraper(URL)
print("----------------")
print("Start pak n save 2")
print("----------------")
#RunScraper(URL2)
print("----------------")
print("Start new world")
RunScraper(U1)


#print(reviews[0])


#Branch protection







##Functions

NEWWORLD = "newworld"
PAKNSAVE = "paknsave"

def RunScraper(URL):
    if URL != None and PAKNSAVE in URL:
        print("Pak n save")
        Start(URL)
    elif URL != None and NEWWORLD in URL:
        print("New World")
        NStart(URL)
    else:
        print("Error")

def Start(urls):
    print(urls)
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    print("2")
    driver.get(urls)
    page_source = driver.page_source
    print("3")
    print("Selenium done?")
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
    
#fs-product-card__row

def NStart(urls):
    print(urls)
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
    Grocery = {"Title","Cost"}
    Items = soup.find_all('div',class_='fs-product-card')
    for IT in Items:
        FoodName = IT.find('h3',class_='u-p2')         
        Name = str(FoodName.get_text())
        
        Spann_dollar = IT.find('span',class_='fs-price-lockup__dollars')        
        Dollar = str(Spann_dollar.get_text().strip())
        
        Span_cents = IT.find('span',class_='fs-price-lockup__cents')
        Cents = str(Span_cents.get_text())
        
        Cost = Dollar + "."+Cents
        #items.append([Name,Cost])
        print(Name +": $"+ Cost)
        
    print('Done')
    print(len(items))
   
        
        
        
    
        