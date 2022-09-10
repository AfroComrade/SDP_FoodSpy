import time
import requests

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
import json


#URL = "https://www.tripadvisor.com/Airline_Review-d8729157-Reviews-Spirit-Airlines#REVIEWS"
URL = "https://www.paknsave.co.nz/shop/Search?q=baked%20beans"
URL2 = "https://www.paknsave.co.nz/shop/Search?q=chocolate"


# https://medium.com/ymedialabs-innovation/web-scraping-using-beautiful-soup-and-selenium-for-dynamic-page-2f8ad15efe25


print("1")
options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

print("2")

driver.get(URL2)
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

    #item_json = item_options.find('data-options')
    printstring = "item price: $" + str(item_dollar_price) + "." + str(item_cent_price)
    print(printstring)
    items.append(item_dollar_price)

#print(reviews[0])


#Branch protection