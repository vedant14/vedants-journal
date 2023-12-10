---
title: The app I created to track my expenses
date: 2023-12-06
description: Using google mail, zapier and google sheets
tags: side-projects
slug: app-to-track-my-expenses
---

I've used Fold recently and honestly I was underwhelmed. All it did was allow me to add a tag to my expenses and sometimes, by learning from my transaction history, it could tag the expense automatically. 

## But here is what I wanted
1. Budgets: Tags are good but then what about the next step? I don't know how much I spent on food and drinks this month or more importantly, how much I can spend on food and drinks this month.
2. How have expenses in each of my categories changed over time?
3. Does not track my credit cards or other bank accounts. 
4. A lot of my expenses are done via Splitwise. There is no way I can track them as well here.
5. A lot of my expenses are shared with friends, I don't want to show the entire amount and use up my budget for the month of that category, when I know there is a promise to receive these funds later.

## Here is what I realised
- All modes of making a payment I use send me a transaction receipt ex- credit cards, bank transfers, etc. Well, google pay did not, but jupiter app did. So that became my primary mode of making UPI payments. 
- Splitwise can also notify me via an email whenever an expense is added.
- I used to use a google form + sheets combo when my expenses were smaller in number. I could fill the google form anytime I want to add a new expense. I actually followed this for more than a year. By then I felt I had a good grasp on my expenses and the count of my expenses had gone up so it became to tiresome to actually track these using a google form. 

## Ideas
1. Make simple web-app form that can put data in google sheets.
	1. The advantage over a google form was that I could customise this better
	2. I gave up because it was a marginal bump.
2. Make a simple web-app with a custom back end
	1. Now along with the ease of adding expenses, I can create a dashboard that can be easy for me to access any time. I can customise this however I want
	2. I gave up because it felt like too much effort to learn how to build charts on top of data.
	3. Plus again, google sheets has enough charts and options for me to do my job. 
3. Create a web-app that can read my emails, parse the information and then record the info in an google sheet
	1. I gave this a good weekend, but finding a cost-effective way to read emails was proving to be a challenge
4. Use features available with google mail, zapier and sheets to create a simple tracking software. 
	1. I decided to give this a try.



## Making a no-code app
*Disclaimer: This is not my first rodeo with Zapier or no-code tools in general. I have a pretty good idea on how to use these tools.*

1. Google Mail
	- I can use filters in google mail to find specific transactions and tag them
	- for ex: from:noreply@hdfcbank.com contains: "credit, transaction" can be tagged as "HDFC Credit Card"
2. Zapier
	- Find the emails that are tagged with "HDFC Credit Card" and create a new row in a google sheet
3. Google sheet
	- So I was creating a new row with the following information
		- Date of email - this was my date of transaction
		- Tag - for our example this was "HDFC Credit Card"
		- Subject and Body of email in plain text
	- I copied the plain text email and asked chat GPT to give me a google sheets regex formula to extract the amount and the beneficiary
	- I wrote a switch formula, where if the tag present is "HDFC Credit Card", then use this particular regex and dump the amount and beneficiary to 2 different columns.
	- Repeat for other credit cards, splitwise, UPI app, etc.
4. Making the data useful
	- I tag the transactions manually, which means I just have to select an option from drop-down
	- I also added a "split with" column, which will divide the transaction amount if I was only responsible for a share of the transaction amount
	- I then added pivots and charts to my liking to track
		- My budgets across different categories
		- Amount that I can spend for the rest of the month on a particular category
		- My savings and expense trends across categories across months. 

This was a fun build, been using it for 2 months. Every now and then I need to update it a little but considering it took me one afternoon to build this, I cannot be more happy. 

Sorry fold, time to uninstall you. 

