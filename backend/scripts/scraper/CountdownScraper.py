# Supermarket scraper script
# This navigates to supermarket websites and scrapes product information
# Each supermarket has a set of categories that can be traversed for product info
# This is specifically designed for paknsave and new world, because we have countdown information
# There are a few sets of commented code that isn't used or specific to different supermarket but it'll make sense as you go through

from random import randint
import time
import ScraperCommit

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
#We only need pickle if we need cookies
import pickle
import threading


# Open the web page with various options
def initializeDriver(url):
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)


    driver.get(url)
    
    # ~~~ Use this if you need to save and use cookies ~~~
    cookies = pickle.load(open("./cookies.pkl", "rb"))
    for cookie in cookies:
        driver.add_cookie(cookie)


    return driver

def NWscrapeForItems(page_source):
    soup = BeautifulSoup(page_source, 'lxml')
    item_location = soup.find('span', class_='fs-selected-store__name').get_text()
    items = []
    items_selector = soup.find_all('div', class_='fs-product-card')
    for item_selector in items_selector:
        product = {}
        item_dollar = item_selector.find('span', class_='fs-price-lockup__dollars')
        if item_dollar is None:
            continue
        item_dollar_price = item_dollar.get_text()

        item_cents = item_selector.find('span', class_='fs-price-lockup__cents')
        item_cent_price = item_cents.get_text()

        item_imageURL = item_selector.find('div', class_="fs-product-card__product-image")['data-src-s']
        
        item_name = item_selector.find('a', class_="fs-product-card__details")
        item_name = item_name['aria-label']
        item_name = item_name.replace("\n","")
        item_name = item_name.replace("/","")
        item_price = str(item_dollar_price) + "." + str(item_cent_price)

        product = dict({"product": item_name, item_location: item_price, "imageURL": item_imageURL})
        items.append(product)
    return items

def loopPages(url):
    items = []
    counter = 2
    check = True
    URL = url
    while (check):
        driver = initializeDriver(URL)
        items = PNSscrapeForItems(driver.page_source)
        print("committing " + URL)
        commitItems(items)
        check = getNextPage2(driver.page_source)
        driver.quit()
        URL = url
        URL += "?pg=" + str(counter)
        counter += 1
        time.sleep(3)
    return items

def urlTask(url, lock):
    items = []
    counter = 2
    check = True
    URL = url
    while (check):
        lock.acquire()
        driver = initializeDriver(URL)
        time.sleep(5)
        lock.release()
        items = NWscrapeForItems(driver.page_source)
        print("committing " + URL)
        lock.acquire()
        for item in items:
            print(item)
        time.sleep(2)
        #commitItems(items)
        lock.release()
        check = getNextPage2(driver.page_source)
        driver.quit()
        URL = url
        URL += "?pg=" + str(counter)
        counter +=1
    return items

def getPickle(url):
    driver = initializeDriver(url)
    pickle.dump( driver.get_cookies(), open("cookies.pkl", "wb"))
    driver.quit()

def main2():
    file = open('./newworld.txt', 'r')
    newWorldURLS = file.readlines()
    file.close()

    #getPickle(newWorldURLS[0])

    lock = threading.Lock()
    for url in newWorldURLS:
        t1 = threading.Thread(target=urlTask, args=(url, lock,))
        t1.start()


# Go through a web page source, find the items, add details to an array of dicts, return for processing & committing
def PNSscrapeForItems(page_source):
    soup = BeautifulSoup(page_source, 'lxml')
    item_location = soup.find('span', class_='fs-selected-store__name').get_text()
    items = []
    items_selector = soup.find_all('div', class_='fs-product-card')
    for item_selector in items_selector:
        product = {}
        item_dollar = item_selector.find('span', class_='fs-price-lockup__dollars')
        if item_dollar is None:
            continue
        item_dollar_price = item_dollar.get_text()

        item_cents = item_selector.find('span', class_='fs-price-lockup__cents')
        item_cent_price = item_cents.get_text()

        item_imageURL = item_selector.find('div', class_="fs-product-card__product-image")['data-src-s']
        
        item_name = item_selector.find('a')
        item_name = item_name['aria-label']
        item_name = item_name.replace("\n","")
        item_name = item_name.replace("/","")
        item_price = str(item_dollar_price) + "." + str(item_cent_price)

        product = dict({"product": item_name, item_location: item_price, "imageURL": item_imageURL})
        items.append(product)
    return items


def getNextPage2(page_source):
    soup = BeautifulSoup(page_source, 'lxml')
    buttons = soup.find_all('li', class_='fs-pagination__item')
    next_button = buttons[(len(buttons))-1]
    next_button_found = next_button.find('a', class_='btn btn--primary btn--large fs-pagination__btn fs-pagination__btn--next')
    return bool(next_button_found is not None)

#Save the items in firebase and on the text file searched by the backend server
def commitItems(items):
    #print(items)
    # Open the items.txt to retrieve all the items we currently have listed
    file = open('../firebase/items.txt', 'r')
    productlines = file.readlines()
    file.close()
    productnames = []
    for line in productlines:
        name = line[:len(line)-1]
        productnames.append(name)

    # Add the items to our product list
    for item in items:
        productnames.append(item['product'])
    
    # Remove Duplicates & sort
    productnames = list(dict.fromkeys(productnames))
    productnames.sort()
    # Save the items in the file accessed by the backend server
    file = open('../firebase/items.txt', 'w')
    for line in productnames:
        file.write(line + '\n')
    file.close()

    #Save into fitebase
    ScraperCommit.firebaseCommit(items)


# main
def main():
    ScraperCommit.firebaseInitialize()
    file = open('./paknsave.txt', 'r')
    paknsaveURLS = file.readlines()
    file.close()
    items = []
    for line in paknsaveURLS:
        items = loopPages(line[:len(line)-1])

main2()